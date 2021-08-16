import React from 'react';
import { useQuery } from '@apollo/client';

const CreatePost = () => {
    return (
        <div className="container">
         <div className="column is-three-quarters-desktop is-full-mobile">

         <input class="input" type="text" placeholder="Post Title">

         <textarea class="textarea" placeholder="Post Content" rows="50"></textarea>



            </div>
        </div>
    )
};



export default CreatePost;