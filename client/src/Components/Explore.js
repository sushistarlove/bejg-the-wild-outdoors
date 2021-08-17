import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import './Explore.css';
import hiking from '../images/hiking1.jpg';
import hiking2 from '../images/hiking2.jpg';
import camp from '../images/camping1.jpg';
import kayak from '../images/kayak1.jpg';
import climb from '../images/climbing1.jpg';
import fish from '../images/fishing1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHiking,
  faFish,
  faCampground,
  faBinoculars,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";


library.add(fab, faHiking, faFish, faCampground, faBinoculars, faAnchor);

const Explore = () => {
  const { loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: "no-cache",
  });

  const postList = data?.posts || [];
  console.log(postList);

  return (
    <div className="container">
     
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {postList.map((post) => {
            return (
              <div
                key={post._id}
                className="column is-half-desktop is-half-tablet is-full-mobile"
                style={{ paddingLeft: "10px" }}
              >
                
                  {/* <div
                    className="column is-multiline"
                    style={{ backgroundColor: "#FFEFD3" }}
                  > */}


                    <div className="image" >
                    <img style={{ alignSelf: "stretch"}} src={hiking2} alt="" />
                      
                        <div className="details">

                        <Link to={{ pathname: `/post/${post._id}` }}>
                              <h2
                                className="postTitle"
                                style={{ textAlign: "center" }}
                              >
                                {post.postTitle}
                              </h2>
                            </Link>
                        
                        
                          <div className="more">

                    
                            <div className="postContent read-more">
                              Read<span>More</span>
                              <p>{post.postContent}</p>
                            </div>


                            <div className="icons">
                              <FontAwesomeIcon icon={['fas', 'anchor']} />
                              <FontAwesomeIcon icon={['fas', 'campground']} />
                              <FontAwesomeIcon icon={['fas', 'fish']} />
                              <FontAwesomeIcon icon={['fas', 'binoculars']} />
                            </div>
                          </div>
                       </div>
                  </div>
                    {/* </div> */}
                 
                
                </div>
            );
           
          })}
        </div>
      )}
      
    </div>
  )
      
};

export default Explore;
