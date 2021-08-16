import React from 'react';
import { useQuery } from '@apollo/client';

const CreatePost = () => {
    return (
        <div className="container">
         <div className="column is-three-quarters-desktop is-full-mobile">

            <div className="field is-grouped">
            <input class="input" type="text" placeholder="Post Title"></input>

<textarea class="textarea" placeholder="Post Content" rows="50"></textarea>

<div class="select">
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

<button class="button is-link">Submit</button>
            </div>
            </div>
        </div>
    )
};



export default CreatePost;