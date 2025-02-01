import React from 'react';
import './TermsAndConditions.css';
import { useHistory } from 'react-router-dom';

const TermsAndConditions = () => {
  const history = useHistory();

  const navigateBack = () => {
    history.goBack();
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="card terms-card">
        <div className="card-body">
          <h1 className="card-title text-center" style={{ color: '#1E90FF' }}>Terms and Conditions</h1>
          <p>
            By using this service, you agree to the following terms and conditions:
            <br />
            - Your data and password are securely stored and never shared.
            <br />
            - Test results are for personal reference and are not standardized.
            <br />
            - Usage is subject to compliance with our privacy policy.
            <br />
            - Please contact support for any assistance.
          </p>
        </div>
        <button className="back-button" onClick={navigateBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
