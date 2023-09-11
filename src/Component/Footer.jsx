import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-columns">
      <div className="footer-column">
        <h3>Success Stories</h3>
        <h3>Our Team</h3>

        <h3>Careers</h3>
        <h3>Masai Blog</h3>

        <h3>Talent Circle</h3>
    
      </div>
      <div className="footer-column">
      <h3>Hire From Us</h3>
        <h3>Our Investors</h3>

        <h3>Newsroom</h3>
        <h3>Contact Us</h3>

        <h3>Become Coach</h3>
      </div>
      <div className="footer-column">
      <h3>About Us</h3>
        <h3>FAQ</h3>

        <h3>Referral Program</h3>
        <h3>Masai Learn</h3>

        <h3>Industry Mentors</h3>
      </div>

      
      <p>Connect with a growing <br />community of learners</p>
      
      
    </div>

    <div className="footer-row">
        <hr />
        <p>© 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture</p>
      </div>
  </footer>
  )
}

export default Footer
