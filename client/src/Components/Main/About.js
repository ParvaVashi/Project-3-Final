import React from 'react';
import './About.css'; // Ensure you have the CSS file for styling
import aboutBanner from '../../assets/aboutus-banner.jpg'; // Adjust path if needed


function About() {
  return (
    <><div className="about-container">

      <h1>About Us</h1>
      <img src={aboutBanner} alt="Blood Donation" className="about-image" />
      <p>Welcome to Life-Bond! We are dedicated to helping people find and donate blood to those in need.</p>
      <p>
        Our platform connects patients and blood donors with blood banks and donation centers.
        We aim to make the blood donation process simple and efficient for everyone involved.
      </p>
      <p>
        Our mission is to ensure that every patient in need of blood receives it in a timely manner,
        and to make the process of donating blood as easy and rewarding as possible.
      </p>
      <p>
        Thank you for visiting Life-Bond. Together, we can make a difference in countless lives.
      </p>
    </div></>
  );
}

export default About;
