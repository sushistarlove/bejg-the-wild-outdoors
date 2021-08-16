import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import "../utils/photos.js";
import "./css/createPost.css";
import Auth from "../utils/auth";
// let widget = window.cloudinary.createUploadWidget({
//     cloudName: "cloudcontrol",
//     uploadPreset: "wild_outdoors"
// },
// (error, result) => {})

const CreatePost = (props) => {
  
  const [addPost] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(document.querySelector('#postTitle').value);
    console.log(document.querySelector('#postContent').value);
    console.log(document.querySelector('#catMenu').value);
    const mutationResponse = await addPost({
      variables: {
        postTitle: document.querySelector('#postTitle').value,
        postContent: document.querySelector('#postContent').value,
        tag: document.querySelector('#catMenu').value,
      },
    });
  };



  return (
    <div className="container">
      <div className="column is-three-quarters-desktop is-full-mobile">
        <div className="field is-grouped">
          <input
            className="input"
            type="text"
            placeholder="Post Title"
            id="postTitle"
     
          ></input>

          <textarea
            className="textarea"
            placeholder="Post Content"
            rows="10"
          
            id="postContent"
          ></textarea>

          {/* <button id="upload_widget" className="button is-primary is-align-content-center">Upload Photo</button> */}

          <div className="select">
            <select id="catMenu">
              <option>Select Categories</option>
              <option>Boating</option>
              <option>Camping</option>
              <option>Climbing</option>
              <option>Fishing</option>
              <option>Hiking</option>
              <option>Hunting</option>
            </select>
          </div>

          <button className="button is-link" onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
