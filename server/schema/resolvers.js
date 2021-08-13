const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {  //good
      return User.find();
    },

    user: async (parent, { userId }) => { //good
      return User.findOne({ _id: userId });
    },
    posts: async (parent, { username }) => { //good
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => { //good
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, password }) => { //good
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => { //good
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

    addPost: async (parent, { postTitle, postContent }, context) => { //good
      if (context.user) {
        const post = await Post.create({
          postTitle,
          postContent,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return thought;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removePost: async (parent, { postId }, context) => {
        if (context.user) {
          const post = await Post.findOneAndDelete({
            _id: postId,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { posts: thought._id } } ///left off 
          );
  
          return thought;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    editPost: async (parent, { userId, post }) => {
      return Post.findOneAndUpdate(
        { _id: userId },
        { $pull: { posts: post } },
        { new: true }
      );
    },
    addComment: async (parent, { userId, post }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
