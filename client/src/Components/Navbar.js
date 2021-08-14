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
          <li><a>Fishing    <i className="fas fa-fish"></i></a></li>
          <li><a>Camping    <i className="fas fa-campground"></i></a></li>
          <li><a>Misc    <i className="fas fa-binoculars"></i></a></li>
        </ul>
        <p className="menu-label">Profile</p>
        <ul className="menu-list">
          <li><a>My Posts</a></li>
       
          <li><a>Account Settings</a></li>
        </ul>
      </aside>

    )
};

export default Navbar;