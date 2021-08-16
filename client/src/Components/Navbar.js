import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHiking, faFish, faCampground, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import '../Components/NavBar.css';

library.add(fab, faHiking, faFish, faCampground, faBinoculars);

// import auth ?



const Navbar = () => {
    return (

        <aside  className="menu column-is-one-quarter is-mobile">
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
          <li><Link>Hiking    <FontAwesomeIcon icon="faHiking" /></Link> </li>
          <li><Link>Fishing    <FontAwesomeIcon icon="faFish" /></Link></li>
          <li><Link>Camping    <FontAwesomeIcon icon="faCampground" /></Link></li>
          <li><Link>Misc    <FontAwesomeIcon icon="faBinoculars" /></Link></li>
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