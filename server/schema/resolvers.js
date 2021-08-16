const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      //complete

      return User.find().populate("posts");
    },

    user: async (parent, { username }) => {
      //complete

      return User.findOne({ username: username });
    },
    posts: async (parent, { userID }) => {
      //complete
      if (!userID) {
        return Post.find().sort({ createdAt: -1 });
      } else {
        return Post.find({ user_id: userID }).sort({ createdAt: -1 });
      }
    },
    post: async (parent, { postId }) => {
      //complete
      //good
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, password }) => {
      //complete
      //good
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      //complete
      //good
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addPost: async (parent, { postTitle, postContent, tag }, context) => {
      //complete
      if (context.user) {
        let newTag = {
          category: tag
        }
        console.log(context.user);
        console.log(newTag);
        const post = await Post.create({
          postTitle,
          postContent,
          postAuthor: context.user.username,
          user_id: context.user._id,
          categories: newTag ,
        });
        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removePost: async (parent, { postId }, context) => {
      //complete
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
        });

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    editPost: async (parent, { postTitle, postContent, postId }, context) => {
      //complete

      if (context.user) {
        const post = await Post.findOneAndUpdate(
          { _id: postId },
          { postTitle: postTitle, postContent: postContent }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (
      parent,
      { postId, commentText },
      context
    ) => {
      //complete

      if (context.user) {
        let newComment = {
          commentText: commentText,
          commentAuthor: context.user.username,
        };
        console.log(newComment);
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: { comments: newComment },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      } else {
        throw new AuthenticationError("You need to be logged in!");
      }
    },
  },
};

module.exports = resolvers;
