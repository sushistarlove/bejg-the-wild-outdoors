import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
        _id
        username
        password
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        username
        password
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postTitle: String!, $postContent: String!) {
    addPost(postTitle: $postTitle, postContent: $postContent) {
      postTitle
      postContent
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment( $postId: ID!, $postText: String!, $commentAuthor: String!) {
    addComment( postId: $postId, postText: $postText, commentAuthor: $commentAuthor) {
      postId
      postText
      commentAuthor
    }
  }
`

export const EDIT_POST = gql`
  mutation editPost($postTitle: String!, $postContent: String!, $postId: ID!) {
    editPost(postTitle: $postTitle, postCotent: $postContent, postId: $postId) {
      postTitle
      postContent
      postId
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      postId
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removePost($postId: ID!, $commentId: ID!) {
    removePost(postId: $postId, commentId: $commentId) {
      postId
      commentId
    }
  }
`;
