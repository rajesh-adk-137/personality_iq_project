
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PersonalityTestIntro.css';
import { Link, useLocation } from 'react-router-dom';


export const PersonalityTestIntro = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-80 w-100">
        <Col sm={12} md={8} lg={6} className="text-center">
          <Card className="card-style">
            <Card.Body>
              <Card.Title className="card-heading">Discover Your Personality</Card.Title>
              <p className="lead text-black font-weight-bold">
                Welcome to the Personality Test. In this fascinating journey of self-discovery, you will answer 20 intriguing questions. Each question has 5 options, and there's no time limit.
              </p>
              <p className="lead text-black font-weight-bold">
                Your choices will define your unique personality profile, which will be revealed at the end of the test.
              </p>
              <Link to={isLoggedIn ? "/personality-test-questions" : "/log-in-request"}>
                <Button variant="outline-success" size="sm" className="card-button">Get Started</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalityTestIntro;
