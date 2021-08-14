import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Explore = () => {
  // const { loading, data } = useQuery(QUERY_POSTS, {
  //   fetchPolicy: "no-cache"

  
  };


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
