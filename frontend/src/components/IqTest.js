import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import underconstruction from '../images/construction.png';
import { Link } from 'react-router-dom';

export const IqTest = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">IQ Test Section is Under Construction</h2>
          <div className="construction-image text-center">
            <img src={underconstruction} alt="Under Construction" width="200" />
          </div>
          <p className="text-center mt-4">
            We're building an incredible IQ Test experience for you!
          </p>
          <p className="text-center">
            Stay tuned for mind-boggling challenges and brain teasers.
          </p>
          <Link to="/" className="d-block mx-auto mt-4">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
