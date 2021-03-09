import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  return (
      <nav className="nav">
        <Link to='/'>
          <h1>Book Club</h1>
        </Link>
        <div className="nav-right">
          {
            currentUser ?
              <>
                <p>Hello, {currentUser.username}</p>
                <button onClick={handleLogout}>Logout</button>
              </>
              :
              <Link to='/login'><p>Login/Register</p></Link>
          }
        </div>
      </nav>
  )
}
