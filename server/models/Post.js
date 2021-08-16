const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  postTitle: {
    type: String,
    required: 'No Title, unexceptable.',
    minlength: 1,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: 'How dare you post without the acompanment of a reputabal author. Shameful',
    minlength: 1,
    trim: true,
  },
  postContent: {
    type: String,
    required: 'Your lack of intellectual production is disgusting',
    minlength: 1,
    trim: true,
  },
  postImage: {
    type: String,
    required: false,
    minlength: 1,
    trim: true,
  },
  categories: [
    {
      category: {
        type: String,
        required: 'If Netlfix can do it then so can we!',
        minlength: 1,
        maxlength: 280,
      },
  
    },
  ],
  user_id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;
