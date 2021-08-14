import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import comments? editPost?
//import queries
// import Auth

const ViewPost = () => {
    // useParams() to retrieve post id ?? 
    const { postId } = useParams();

    //const { loading, data } = useQuery({ variables: { postId: postId }})
    //pass URL paramter to load post?


const singlePost = data?.singlePost || {};

if (loading) {
    return <div>Loading...</div>;
}

return (

    <div className="container">

<div class="image">
    <img src="" alt="">
    <div class="details">
        <div class="content">
                  <h2 className="postTitle" style={{ textAlign: "center" }}>Welcome to Wild Outdoors</h2>
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                  fermentum.
                </div>
        <div class="more">
            <a href="" target="blank"
                rel="noopener noreferrer" class="read-more">View<span>Post</span></a>
            
            <div class="icons">
                 <i class="fas fa-campground"></i>
                 <i class="fas fa-hiking"></i>
                 <i class="fas fa-fish"></i>
                 <i class="fas fa-snowboarding"></i>
                 <i class="fas fa-binoculars"></i>
                 <i class="fas fa-anchor"></i>
                 <i class="fas fa-mountain"></i>
                </div> 


            </div>
        </div>
    
</img>
    </div>
    </div>
   

    // {/* // <Comment /> */}

);
};


export default ViewPost;
