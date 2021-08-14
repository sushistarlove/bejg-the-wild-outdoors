import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Explore = () => {
  // const { loading, data } = useQuery(QUERY_POSTS, {
  //   fetchPolicy: "no-cache"

    const postList = data?.posts || [];



  return (

<div className="container">

{loading ? (<div>Loading...</div>) : (
  <div className="columns">
{postList.map((post) => {
            return (
  <div key={post._id} className="column-is-three-quarters" style={{paddingLeft: "10px"}}>
      <div class="columns is-multiline">

      {/* <!-- card start --> */}
   <div className="column is-half-desktop is-half-tablet is-full-mobile" style={{backgroundColor: "#FFEFD3"}}>
    <div className="card">
     <div className="card-content">
         <div className="content">
           <h2 className="postTitle" style={{textAlign: "center"}}>A Kayaker's Guide to Vancouver Island</h2>
           Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
           eros. Donec id elit non mi porta gravida at eget metus. Cum
           sociis natoque penatibus et magnis dis parturient montes,
           nascetur ridiculus mus. Cras mattis consectetur purus sit amet
           fermentum.
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
{/* <!-- card end --> */}
</div>
</div>)
</div>
}
  </div>)

  

  
 ) };


{/* //i think this mapping logic would be more applicable to the ViewPost component rather than the Explore

//   const postList = data?.posts || [];

//   return (
//     <div className="column is-10 is-offset-1">

//       {loading ? ( */}
{/* //         <div>Loading...</div>
//       ) : (
//         <div className="columns deck">
//           {postList.map((post) => { */}
{/* //             return (
//               <div key={post._id} class="card column is-5">
//                 <div class="card-content">
//                   <div class="content">
//                   <Link to={{ pathname: `/post/${post._id}` }}>
                    
//                     <h2>{post.postTitle}</h2>
//                   </Link>

//                   </div>
//                 </div>
//               </div>

//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }; */}

export default Explore;
