import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function SignUp() {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false); // State to track checkbox
  const [termsError, setTermsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setNameError(false);
    setPasswordLengthError(false);
    setTermsError(false);

    if (!termsChecked) {
      setTermsError(true);
      return;
    }

    if (userData.password !== userData.repeatPassword) {
      setPasswordError(true);
      return;
    }

    if (!userData.name) {
      setNameError(true);
      return;
    }

    if (userData.password.length < 8) {
      setPasswordLengthError(true);
      return;
    }

    // Modify the below URL to match your backend registration API endpoint
    axios.post('http://localhost:8000/api/register', userData)
    .then((response) => {
      console.log('Registration Successful!', response.data);
      history.push('/log-in'); // Redirect to the login page after successful registration
    })
    .catch((error) => {
      let errorMessage = 'Registration Failed!';
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = 'Registration Failed! Are you sure you are not already signed up with this email? if that\'s not the case, Try again.';
        }
        // Handle other error status codes if needed
      }
  
      console.error(errorMessage, error);
      alert(errorMessage);
    });
  
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5 py-4'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            {nameError && <small className="text-danger mb-4">Please enter your name</small>}

            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' onChange={(e) => setUserData({ ...userData, repeatPassword: e.target.value })} />
            {passwordError && <small className="text-danger mb-4">Passwords do not match</small>}
            {passwordLengthError && <small className="text-danger mb-4">Password must be at least 8 characters long</small>}

            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label={
                <div>
                  I agree to all statements in <a href="/terms-conditons">Terms of service</a>
                </div>
              } onChange={() => setTermsChecked(!termsChecked)} checked={termsChecked} />
            </div>
            {termsError && <small className="text-danger mb-4">Please agree to the Terms of Service before registering.</small>}
            <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </form>
          <p className="text-center mb-3">
            Already signed up? <Link to="/log-in">Login</Link>
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
