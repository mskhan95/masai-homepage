import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
        alt=""
      />
      <br />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <div className="middle-part">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              COURSES <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FEES
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              EVENTS
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              LEARN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              SUCCESS STORIES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              HIRE FROM US
            </a>
          </li>
          </div>
          <div className="left-content">
            <li className="nav-item">
              <a className="nav-link" href="#">
                REFER & EARN
              </a>
            </li>
            <li className="nav-item">
              <button className="signup"> SIGN UP</button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
