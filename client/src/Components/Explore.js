import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <div className="card">
     <div className="card-content">
         <div className="content">
         <Link to={{ pathname: `/post/${post._id}` }}><h2 className="postTitle" style={{textAlign: "center"}}>{post.postTitle}</h2></Link>  
         
         </div>
         <div className="icons">
          <i className="fas fa-anchor"></i>
          <i className="fas fa-campground"></i>
          <i className="fas fa-fish"></i>
          <i className="fas fa-binoculars"></i>
         </div> 
       </div>
    </div>
   </div>


</div>
</div>)}

)

            }
</div>


  )
          }
  </div>
  )
        
  };



export default Explore;
