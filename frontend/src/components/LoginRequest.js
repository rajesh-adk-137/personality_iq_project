


import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRequest.css';

const LoginRequest = () => {
  const handleLogin = () => {
    console.log('Redirecting to the login page or initiating the login process.');
  };

  return (
    <div className="login-card">
      <h2>You are not logged in!</h2>
      <p>Uncover your potential with our exclusive IQ and Personality Test. Begin your journey now—quick, simple, and revealing. Sign up or log in to embark on the extraordinary.</p>
      <div className="button-container">
        <Link to="/log-in">
          <button onClick={handleLogin}>Log-in</button>
        </Link>
        <span>Or</span>
        <Link to="/sign-up">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginRequest;
