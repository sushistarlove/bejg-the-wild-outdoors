import React from 'react';
import { useQuery } from '@apollo/client';

const CreatePost = () => {
    return (
        <div className="container">
         <div className="column is-three-quarters-desktop is-full-mobile">

            <div className="field is-grouped">

            <input className="input" type="text" placeholder="Post Title"></input>

<textarea className="textarea" placeholder="Post Content" rows="50"></textarea>

<button id="upload_widget" className="button is-primary is-align-content-center">Upload Photo</button>

<div className="select">
<select>
<option>Select Categories</option>
<option>Boating</option>
<option>Camping</option>
<option>Climbing</option>
<option>Fishing</option>
<option>Hiking</option>
<option>Hunting</option>
</select>
</div>

<button className="button is-link">Submit</button>

            </div>
            </div>
        </div>
    )
};



export default CreatePost;