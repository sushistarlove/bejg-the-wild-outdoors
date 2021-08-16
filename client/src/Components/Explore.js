import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHiking, faFish, faCampground, faBinoculars, faAnchor } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHiking, faFish, faCampground, faBinoculars, faAnchor);

const Explore = () => {
  const { loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: "no-cache"});

    const postList = data?.posts || [];

  return (

<div className="container">

{ loading ? (<div>Loading...</div>) : (
  <div className="columns">
{ postList.map((post) => {
            return (
  <div key={post._id} className="column-is-three-quarters" style={{paddingLeft: "10px"}}>
      <div class="columns is-multiline">

   <div className="column is-half-desktop is-half-tablet is-full-mobile" style={{backgroundColor: "#FFEFD3"}}>
    <div className="image">
    <img src="" alt="">
     <div className="details">
         <div>
         <Link to={{ pathname: `/post/${post._id}` }}><h2 className="postTitle" style={{textAlign: "center"}}>{post.postTitle}</h2></Link>  
         <div className="postContent">
           {post.postContent}
         </div>
         <div className="icons">
         <FontAwesomeIcon icon="faAnchor" /><FontAwesomeIcon icon="faCampground" /><FontAwesomeIcon icon="faFish" /><FontAwesomeIcon icon="faBinoculars" />
         </div> 
       </div>
    </div>
    </img>
   </div>

</div>
</div>
</div>
            
  )
            }
)
            }
                 
  </div>
            )
  }
  </div>
  )
  };
  

export default Explore;
