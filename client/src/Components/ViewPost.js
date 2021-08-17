import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHiking, faFish, faCampground, faBinoculars, faSnowboarding, faAnchor, faMountain } from '@fortawesome/free-solid-svg-icons';
import './ViewPost.css';


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

<div className="column is-three-quarters-desktop is-full-mobile">
    <img src="" alt="">
    </img>
    <div className="cardContent">
        <div className="content">
                  <h2 className="postTitle" style={{ textAlign: "center" }}>Welcome to Wild Outdoors</h2>
                 
                </div>

                <div className="postContent">
                
                </div>
            
            <div className="icons">
                <FontAwesomeIcon icon={['fas', 'campground']} />
                <FontAwesomeIcon icon={['fas', 'hiking']} />
                 <FontAwesomeIcon icon={['fas', 'fish']} />
                 <FontAwesomeIcon icon={['fas', 'snowboarding']} />
                 <FontAwesomeIcon icon={['fas', 'binoculars']} />
                 <FontAwesomeIcon icon={['fas', 'anchor']} />
                 <FontAwesomeIcon icon={['fas', 'mountain']} />
                </div> 
  
        </div>
    

    </div>
    </div>
   

    // {/* // <Comment /> */}

);
};


export default ViewPost;
