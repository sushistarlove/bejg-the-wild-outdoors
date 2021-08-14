import React from 'react';
import { Link } from 'react-router-dom';

// import auth ?

// still need to import font awesome icons

const Navbar = () => {
    return (

        <aside  className="menu column-is-one-quarter is-mobile">
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
          <li><Link>Hiking    <i className="fas fa-hiking"></i></Link> </li>
          <li><Link>Fishing    <i className="fas fa-fish"></i></Link></li>
          <li><Link>Camping    <i className="fas fa-campground"></i></Link></li>
          <li><Link>Misc    <i className="fas fa-binoculars"></i></Link></li>
        </ul>
        <p className="menu-label">Profile</p>
        <ul className="menu-list">
          <li><Link>My Posts</Link></li>
       
          <li><Link>Account Settings</Link></li>
        </ul>
      </aside>

    )
};

export default Navbar;