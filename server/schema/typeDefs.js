const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    posts: [Post]!
  }
  type Post {
    _id: ID
    postContent: String
    postAuthor: String
    postTitle: String
    createdAt: String
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    posts(userID: ID): [Post]
    post(postId: ID!): Post
  }
  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addPost(postTitle: String!, postContent: String!): Post
    addComment(
      postId: ID!
      postText: String!
      commentAuthor: String!
    ): Post
    editPost(postTitle: String!, postContent: String!, postId: ID!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;
module.exports = typeDefs;