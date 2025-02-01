


import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import facebookLogo from '../images/Facebook-logo.png';
import twitterLogo from '../images/twitter.png';
import instagramLogo from '../images/instagram-logo.png';

export const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="card-1">
        <div className="card-body">
          <h2 className="about-description">Welcome to Our Website!</h2>
          <p>Embark on a Journey of Self-Discovery!</p>
          <p>A captivating platform has been created as a project for fun and for learning web development. It offers free, enlightening personality and IQ tests. The mission is to empower individuals from all walks of life, allowing them to delve into the depths of their personalities and unlock their intellectual prowess.</p>
          <p>The meticulously designed tests serve as a gateway to self-discovery and intellectual exploration, allowing individuals to discover the untapped potential within themselves. Their unique attributes can be embraced, knowledge expanded, and a remarkable path towards personal growth can be set off on.</p>
          <h3>To find out more about the platform, visit its social platforms:</h3>
          <div className="social-buttons">
            <a href="https://www.facebook.com/nepal" target="_blank" className="social-button">
              <img src={facebookLogo} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.twitter.com/nepal" target="_blank" className="social-button">
              <img src={twitterLogo} alt="Twitter" className="social-icon-twitter" />
            </a>
            <a href="https://www.instagram.com/nepal" target="_blank" className="social-button">
              <img src={instagramLogo} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
