
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';

function LogIn() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      alert('You are already logged in. Please logout first to login with another account.');
      history.push('/');
    }
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', credentials);

      if (response.data && response.data.jwt) {
        const token = response.data.jwt;
        localStorage.setItem('token', token);
        history.push('/');
      } else {
        throw new Error('Token not received');
      }
    } catch (error) {
      console.error('Login Failed! Error:', error);
      if (error.response && error.response.status === 401) {
        setLoginError('Incorrect email or password.');
      } else {
        setLoginError('An error occurred. Please try again later.');
      }
    }
  }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ height: '100vh', backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5 py-4'>
          <h2 className="text-uppercase text-center mb-5">Login</h2>
          <form onSubmit={handleSubmit}>
            {loginError && <p className="error-message">{loginError}</p>}
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn>
          </form>
          <p className="text-center mb-3">
            Not signed up? <Link to="/sign-up">Sign up</Link>
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LogIn;





