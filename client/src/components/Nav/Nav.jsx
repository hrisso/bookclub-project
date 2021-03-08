import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <nav>
        <Link to='/'>
          <h1>Book Club</h1>
        </Link>
        {
          currentUser ?
            <>
              <p>Hello, {currentUser.username}</p>
              <Link onClick={handleLogout}>Logout</Link>
            </>
            :
            <Link to='/login'>Login/Register</Link>
        }
      </nav>
    </div>
  )
}
