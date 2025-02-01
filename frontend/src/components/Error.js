import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'; // Import CSS file

const Error = () => {
  return (
    <div className="errorStyle">
      <h1 className="headingStyle">Page Error</h1>
      <p className="paragraphStyle">
        The page you're looking for doesn't exist or you don't have permission to access it now.
      </p>
      <Link to="/" className="linkStyle">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
