import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Navbar.css'; 

const Navbar = () => {
  const links = [
    { title: "COURSES" },
    { title: "FEES" },
    { title: "EVENTS" },
    { title: "LEARN" },
    { title: "SUCCESS STORIES" },
    { title: "HIRE FROM US" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light parent">
      <div className="container mainparent">
        <a className="navbar-brand" href="#">
          <img
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
            alt="Logo"
          />
        </a>

        <button
          className="navbar-toggler drawer"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mainlink" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((ele, i) => (
              <li key={i} className="nav-item links">
                <a className="nav-link" href="#">
                  {ele.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-auto Hstack">
            <button className="btn btn1">REFER & EARN</button>
            <button className="btn btn-outline-danger btn2">SIGN UP</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
