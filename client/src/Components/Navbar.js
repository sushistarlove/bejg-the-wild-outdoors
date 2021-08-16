import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHiking, faFish, faCampground, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import '../Components/NavBar.css';

library.add(fab, faHiking, faFish, faCampground, faBinoculars);

// import auth ?



// const Navbar = () => {
//     return (

//         <aside  className="menu column-is-one-quarter is-mobile">
//         <p className="menu-label">Categories</p>
//         <ul className="menu-list">
//           <li><Link>Hiking    <FontAwesomeIcon icon="faHiking" /></Link> </li>
//           <li><Link>Fishing    <FontAwesomeIcon icon="faFish" /></Link></li>
//           <li><Link>Camping    <FontAwesomeIcon icon="faCampground" /></Link></li>
//           <li><Link>Misc    <FontAwesomeIcon icon="faBinoculars" /></Link></li>
//         </ul>
//         <p className="menu-label">Profile</p>
//         <ul className="menu-list">
//           <li><Link>My Posts</Link></li>
//           <li a="/login"><Link>Login</Link> </li>
//           <li><Link>Account Settings</Link></li>
//         </ul>
//       </aside>

//     )
// };

// export default Navbar;

function Navbar({ currentPage, handlePageChange }) {




  return (

    <aside className="menu column-is-one-quarter is-mobile">
      {/* <p className="menu-label">Categories</p>
        <ul className="menu-list">
          <li><Link>Hiking    <FontAwesomeIcon icon="faHiking" /></Link> </li>
          <li><Link>Fishing    <FontAwesomeIcon icon="faFish" /></Link></li>
          <li><Link>Camping    <FontAwesomeIcon icon="faCampground" /></Link></li>
          <li><Link>Misc    <FontAwesomeIcon icon="faBinoculars" /></Link></li>
        </ul> */}
      <p className="menu-label">Profile</p>
      <ul className="menu-list">
        {/* <li><Link>My Posts</Link></li> */}

        <li className="nav-item">
          <a
            href="/"
            onClick={() => handlePageChange('Explore')}
            className={currentPage === 'Explore' ? 'nav-link active' : 'nav-link'}
          >
            Explore    <FontAwesomeIcon icon={['fas', 'binoculars']} />
          </a>
        </li>

        <li className="nav-item">
          <a
            href="signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          >
            Signup  <FontAwesomeIcon icon={['fas', 'hiking']} />
          </a>
        </li>

        <li className="nav-item">
          <a
            href="login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login    <FontAwesomeIcon icon={['fas', 'campground']} />
          </a>
        </li>

        <li className="nav-item">
          <a
            href="createpost"
            onClick={() => handlePageChange('Create Post')}
            className={currentPage === 'Create Post' ? 'nav-link active' : 'nav-link'}
          >
            Create Post    <FontAwesomeIcon icon={['fas', 'fish']} />
          </a>
        </li>


        {/* <li className="nav-item">
          <a
            href="viewpost"
            onClick={() => handlePageChange('My Posts')}
            className={currentPage === 'My Posts' ? 'nav-link active' : 'nav-link'}
          >
            My Posts
          </a>
        </li> */}

        {/* <li><Link>Account Settings</Link></li> */}

      </ul>
    </aside>



    // <div className="menu column-is-one-quarter is-mobile">

    //   <div className="name">
    //     <h1><span id="ben">Ben</span>Thackray</h1>
    //   </div>
    //   <ul className="nav nav-tabs">
    //     <li className="nav-item">
    //       <a
    //         href="login"
    //         onClick={() => handlePageChange('Home')}
    //         className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Home
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#about"
    //         onClick={() => handlePageChange('About')}
    //         //  TODO: Add a comment explaining what this logic is doing

    //         className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Resume
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#blog"
    //         onClick={() => handlePageChange('Blog')}
    //         //  TODO: Add a comment explaining what this logic is doing

    //         className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Portfolio
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#contact"
    //         //  TODO: Add a comment explaining what this logic is doing

    //         onClick={() => handlePageChange('Contact')}
    //         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Contact
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Navbar;