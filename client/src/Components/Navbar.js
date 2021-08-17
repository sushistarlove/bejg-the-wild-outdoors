import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHiking, faFish, faCampground, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import '../Components/NavBar.css';
import Auth from '../utils/auth';


library.add(fab, faHiking, faFish, faCampground, faBinoculars);


function Navbar({ currentPage, handlePageChange }) {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (

    <aside className="menu column-is-one-quarter is-mobile">

      <p className="menu-label">Profile</p>
      <ul className="menu-list">

        <li className="nav-item">
          <a
            href="/"
            onClick={() => handlePageChange('Explore')}
            className={currentPage === 'Explore' ? 'nav-link active' : 'nav-link'}
          >
            Explore    <FontAwesomeIcon icon={['fas', 'binoculars']} />
          </a>
        </li>

        {Auth.loggedIn() ? (

          <>

            <li className="nav-item">
              <a
                href="createpost"
                onClick={() => handlePageChange('Create Post')}
                className={currentPage === 'Create Post' ? 'nav-link active' : 'nav-link'}
              >
                Create Post    <FontAwesomeIcon icon={['fas', 'fish']} />
              </a>
            </li>
            <li>

            <a className="nav-item" onClick={logout}>
              Logout <FontAwesomeIcon icon={['fas', 'campground']} />
            </a>
            </li>
          </>
        ) : (
          <>
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

          </>
        )}

      </ul>
    </aside>

  );
}

export default Navbar;