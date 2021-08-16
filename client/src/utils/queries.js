import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      postContent
      postAuthor
      postTitle
      comments {
        commentText
      }
      createdAt

    }
  }
`;

export const QUERY_POST = gql`
  query onePost($post_id: ID!) {
    post(postId: $post_id) {
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
    }
  }
`;

export const QUERY_USER = gql`
  query oneUser($username: String!) {
    user(username: $username) {
        _id
        username
        password
        posts
    }
  }
`;
