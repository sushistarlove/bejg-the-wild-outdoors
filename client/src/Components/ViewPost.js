import React from "react";
import { Link } from "react-router-dom";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHiking,
  faFish,
  faCampground,
  faBinoculars,
  faSnowboarding,
  faAnchor,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faHiking,
  faFish,
  faCampground,
  faBinoculars,
  faSnowboarding,
  faAnchor,
  faMountain
);

// import comments? editPost?
//import queries
// import Auth

const ViewPost = () => {
  // useParams() to retrieve post id ??
  const { postId } = useParams();

  const { loading, data } = useQuery({ variables: { postId: postId } });
  //pass URL paramter to load post?

  const singlePost = data?.singlePost || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  //viewPost card needs some untangling. i'm incorporating responsive image card css into the og post card from explore

  return (
    <div className="container">
<<<<<<< HEAD
      <div className="column is-three-quarters-desktop is-full-mobile">
        <img src="" alt=""></img>
        <div className="cardContent">
          <div className="content">
            <h2 className="postTitle" style={{ textAlign: "center" }}>
              Welcome to Wild Outdoors
            </h2>
          </div>

          <div className="postContent">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
            Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Cras mattis consectetur purus sit amet fermentum.
          </div>

          <div className="icons">
            <FontAwesomeIcon icon="faCampground" />
            <FontAwesomeIcon icon="faHiking" />
            <FontAwesomeIcon icon="faFish" />
            <FontAwesomeIcon icon="faSnowboarding" />
            <FontAwesomeIcon icon="faBinoculars" />
            <FontAwesomeIcon icon="faAnchor" />
            <FontAwesomeIcon icon="faMountain" />
          </div>
=======

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
  
>>>>>>> 319362769e6483dd5b536b6a1212156c66c772a7
        </div>
      </div>

      <div className="commentSection">
        <div class="field">
          <label class="label">Comments</label>
          <section>
            {/* previously written comments should display here */}
            <Link to={{ pathname: `/post/${Comment._id}` }}>
              <h2 className="commentTitle" style={{ textAlign: "center" }}>
                {Comment.commentTitle}
              </h2>
            </Link>

            {Comment.postContent}
          </section>
          <div class="control">
            <input class="input" type="text" placeholder="Add comment..." />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
