


import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'; // Import the corresponding CSS file

export const Home = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}` // Set the Bearer token in the request's Authorization header
            }
          };

          const response = await axios.get('http://localhost:8000/api/user', config);
          setUserName(response.data.name); // Assuming 'name' is the key for the user's name in the response
        }
      } catch (error) {
        console.error('Error checking user login:', error);
        // Handle the error, possibly redirect to login, etc.
      }
    };

    checkLoggedInUser();
  }, []);

  return (
    <Container className="my-5">
     {userName && (
        <h1 className="text-center mb-5">Hello {userName}!</h1>
      )}

      <Row className="justify-content-center">
        {/* Personality Test Card */}
        <Col md={4} className="mb-4">
          <Card className="border-0 shadow card-hover-effect" bg="light">
            <Card.Body>
              <Card.Title className="text-primary">Personality Test</Card.Title>
              <Card.Text>
                Explore your inner self, understand your strengths and weaknesses, and discover your unique personality traits. Personality tests are valuable tools for personal growth, career choices, and enhancing relationships.
              </Card.Text>
              <Link to="/personality-test-intro">
                <Button variant="primary">Take the Test</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* IQ Test Card */}
        <Col md={4} className="mb-4">
          <Card className="border-0 shadow card-hover-effect" bg="light">
            <Card.Body>
              <Card.Title className="text-success">IQ Test</Card.Title>
              <Card.Text>
                Challenge your intellect, measure your problem-solving skills, and unlock your cognitive potential. IQ tests are beneficial for academic and professional pursuits, helping you discover your capabilities.
              </Card.Text>
              <Link to="/iq-test">
                <Button variant="success">Take the Test</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Are They Useful Section */}
      <div className="mt-5">
        <h2 className="text-center mb-4">Why Are They Useful?</h2>
        <Row className="justify-content-center">
          <Col md={5} className="mb-4">
            <Card className="border-0 shadow card-hover-effect" bg="light">
              <Card.Body>
                <Card.Title>Personality Tests</Card.Title>
                <Card.Text>
                  Personality tests help you gain insights into your behavior, preferences, and emotional patterns. They can be valuable for personal growth, career choices, and enhancing relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5} className="mb-4">
            <Card className="border-0 shadow card-hover-effect" bg="light">
              <Card.Body>
                <Card.Title>IQ Tests</Card.Title>
                <Card.Text>
                  IQ tests measure your problem-solving abilities, logical thinking, and analytical skills. They are beneficial for academic and professional pursuits, helping you discover your intellectual capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
