

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo_mine.png';

export const NavbarComp = () => {
  const location = useLocation();
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  const isLoggedIn = !!token; // Check if a token is present in local storage
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Brand Logo" height="50" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5">
            {/* Other Nav.Links for different sections */}
            <Nav.Link
              as={Link}
              to="/"
              className={`text-light ${location.pathname === '/' ? 'border-bottom' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/personality-test-intro"
              className={`text-light ${
                location.pathname === '/personality-test-questions' ||
                location.pathname === '/personality-test-intro' ||
                location.pathname === '/personality-test-result'
                  ? 'border-bottom'
                  : ''
              }`}
            >
              Personality Test
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/iq-test"
              className={`text-light ${location.pathname === '/iq-test' ? 'border-bottom' : ''}`}
            >
              IQ Test
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about-us"
              className={`text-light ${location.pathname === '/about-us' ? 'border-bottom' : ''}`}
            >
              About us
            </Nav.Link>

            {/* Conditional rendering for Login/Logout button */}
            {isLoggedIn ? (
  <Nav.Link
    as={Link}
    to="/log-out"
    className={`text-light ${location.pathname === '/log-out' ? 'border-bottom' : ''}`}
  >
    Log out
  </Nav.Link>
) : (
  <Nav.Link
    as={Link}
    to="/log-in"
    className={`text-light ${
      location.pathname === '/log-in' ||
      location.pathname === '/sign-up' 
        ? 'border-bottom'
        : ''
    }`}
  >
    Log in
  </Nav.Link>
)}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
