import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to='/'>
          <h1>Book Club</h1>
        </Link>
        <Link to='/login'>
          <h4>Login/Register</h4>
        </Link>
      </nav>
    </div>
  )
}
