import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Explore = () => {
  // const { loading, data } = useQuery(QUERY_POSTS, {
  //   fetchPolicy: "no-cache"

    const postList = data?.posts || [];



  return (

<div class="container">

{loading ? (<div>Loading...</div>) : (
  <div class="columns">
{postList.map((post) => {
            return (
  <div key={post._id} class="column-is-three-quarters" style="padding-left: 10px;">
      <div class="columns is-multiline">

      {/* <!-- card start --> */}
   <div class="column is-half-desktop is-half-tablet is-full-mobile" style="background-color: #FFEFD3;">
    <div class="card">
     <div class="card-content">
         <div class="content">
           <h2 class="postTitle" style="text-align: center">A Kayaker's Guide to Vancouver Island</h2>
           Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
           eros. Donec id elit non mi porta gravida at eget metus. Cum
           sociis natoque penatibus et magnis dis parturient montes,
           nascetur ridiculus mus. Cras mattis consectetur purus sit amet
           fermentum.
         </div>
         <div class="icons">
          <i class="fas fa-anchor"></i>
          <i class="fas fa-campground"></i>
          <i class="fas fa-fish"></i>
          <i class="fas fa-binoculars"></i>
         </div> 
       </div>
    </div>
   </div>
{/* <!-- card end --> */}
</div>
</div>)
</div>
}
  </div>

  );

  
 ) };


//i think this mapping logic would be more applicable to the ViewPost component rather than the Explore

//   const postList = data?.posts || [];

//   return (
//     <div className="column is-10 is-offset-1">

//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="columns deck">
//           {postList.map((post) => {
//             return (
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
// };

export default Explore;
