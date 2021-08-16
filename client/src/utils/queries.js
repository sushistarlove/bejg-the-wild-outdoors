import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      postContent
      postAuthor
      postTitle
      createdAt
      comments
    }
  }
`;

export const QUERY_POST = gql`
  query onePost {
    post {
      _id
      postContent
      postAuthor
      postTitle
      createdAt
      comments
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
        _id
        username
        password
        posts
    }
  }
`;

export const QUERY_USER = gql`
  query oneUser {
    user {
        _id
        username
        password
        posts
    }
  }
`;
