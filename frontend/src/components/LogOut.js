

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function LogOut() {
  const history = useHistory();
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    axios
      .post('http://localhost:8000/api/logout')
      .then(() => {
        console.log('Logged out successfully');
        localStorage.removeItem('token');
        window.location.href = '/'; // Redirect to home page after logout
      })
      .catch((error) => {
        console.error('Logout failed', error);
        alert('Logout failed. Please try again.');
        localStorage.removeItem('token');
        window.location.href = '/';
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You are not logged in.');
      history.push('/');
    }
  }, [history]);

  const handleConfirmLogout = () => {
    setConfirmLogout(true);
    handleLogout(); // Logout on confirmation
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body px-5 py-4">
          {!confirmLogout ? (
            <div>
              <h2>Are you sure you want to logout?</h2>
              <button onClick={handleConfirmLogout} className="btn btn-primary me-2">
                Yes
              </button>
              <button onClick={() => history.push('/')} className="btn btn-secondary">
                No
              </button>
            </div>
          ) : (
            <div>
              <h2>Logging out...</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LogOut;
