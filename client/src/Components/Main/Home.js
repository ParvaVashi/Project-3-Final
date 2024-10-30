import React from 'react';
import '../Main/Home.css';
import bannerImage from '../../assets/bg.webp';
import regImage from '../../assets/register.png'; // Replace with your image path
import seeImage from '../../assets/health-screening.png'; // Replace with your image path
import donateImage from '../../assets/donation.png'; // Replace with your image path
import saveImage from '../../assets/save-life.png'; // Replace with your image path
import donationImage from '../../assets/blood-compatible1.jpg'; // Replace with your image path
import banner1 from '../../assets/bg2.jpg';

function Home() {
  return (
    <div>
      <div className="banner">
      <img src={bannerImage} alt="Banner" />
    </div>
      <div className="banner-container">
        <div className="banner-content">
          <img src={banner1} alt="Blood Donation" className="banner-bg2-image" />
          <div className="banner-text">
            <h1>Be the reason </h1>
            <h1> for </h1>
            <h1>someone's heartbeat </h1>
          </div>
        </div>
        
      </div>

      
      <div className="donation-info">
        <h1>Learn about Donation</h1>
        <p>After donating blood, the body works to replenish the blood loss.</p> 
        <p> This stimulates the production of new blood cells and in turn,</p>
        <p> helps in maintaining good health.</p>
        <img src={donationImage} alt="Donation Information" className="donation-image" />
      </div>

      <div className="process-container">
        <h1>Blood Donation Process</h1>
        <div className="process-flow">
          <div className="flow-step">
            <div className="step-icon-container">
              <img src={regImage} alt="Registration" />
            </div>
            <div className="step-content">
              <h2>1) Registration</h2>
              <p>Register yourself as a donor to begin the process.</p>
            </div>
          </div>
        
          <div className="flow-step">
            <div className="step-icon-container">
              <img src={seeImage} alt="Seeing" />
            </div>
            <div className="step-content">
              <h2>2) Seeing</h2>
              <p>Undergo a health check-up and screening for eligibility.</p>
            </div>
          </div>
          
          <div className="flow-step">
            <div className="step-icon-container">
              <img src={donateImage} alt="Donation" />
            </div>
            <div className="step-content">
              <h2>3) Donation</h2>
              <p>Donate blood at the designated center.</p>
            </div>
          </div>
          
          <div className="flow-step">
            <div className="step-icon-container">
              <img src={saveImage} alt="Save Life" />
            </div>
            <div className="step-content">
              <h2>4) Save Life</h2>
              <p>Your donation helps save lives. Thank you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
