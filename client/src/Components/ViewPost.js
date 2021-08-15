import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHiking, faFish, faCampground, faBinoculars, faSnowboarding, faAnchor, faMountain } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHiking, faFish, faCampground, faBinoculars, faSnowboarding, faAnchor, faMountain);

// import comments? editPost?
//import queries
// import Auth

const ViewPost = () => {
    // useParams() to retrieve post id ?? 
    const { postId } = useParams();

    const { loading, data } = useQuery({ variables: { postId: postId }})
    //pass URL paramter to load post?


const singlePost = data?.singlePost || {};

if (loading) {
    return <div>Loading...</div>;
}


//viewPost card needs some untangling. i'm incorporating responsive image card css into the og post card from explore

return (

    <div className="container">

<div className="image">
    <img src="" alt="">
    <div className="details">
        <div className="content">
                  <h2 className="postTitle" style={{ textAlign: "center" }}>Welcome to Wild Outdoors</h2>
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                  fermentum.
                </div>
        <div className="more">
            <a href="" target="blank"
                rel="noopener noreferrer" className="read-more">View<span>Post</span></a>
            
            <div className="icons">
                <FontAwesomeIcon icon="faCampground" />
                <FontAwesomeIcon icon="faHiking" />
                 <FontAwesomeIcon icon="faFish" />
                 <FontAwesomeIcon icon="faSnowboarding" />
                 <FontAwesomeIcon icon="faBinoculars" />
                 <FontAwesomeIcon icon="faAnchor" />
                 <FontAwesomeIcon icon="faMountain" />
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
