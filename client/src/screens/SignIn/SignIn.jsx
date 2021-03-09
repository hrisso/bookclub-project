import React from 'react';
import './SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin, error } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="login-container">
      <form className="sign-in-form"
        onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h3>Login</h3>
        <div className="not-a-member">
          <p>Not a member?</p>
          <Link to='/register'><h4>Register</h4></Link>
        </div>
        {
          error &&
          <p>{error}</p>
        }
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
