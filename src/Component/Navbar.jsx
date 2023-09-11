import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
      <p className="navbar-brand" >
         logo
        </p>
        <p className="navbar-brand" >
          COURSES
        </p>

        <p className="navbar-brand" >
          FEES
        </p>

        <p className="navbar-brand" >
          EVENTS
        </p>

        <p className="navbar-brand" >
          LEARN
        </p>


        <p className="navbar-brand" >
         SUCCESS STORIES
        </p>

        <p className="navbar-brand" >
          HIRE FROM US
        </p>


        <p className="navbar-brand" >
         SUCCESS STORIES
        </p>
        {/* <a href="/" className="navbar-brand"> Student Management App</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">REFER & EARN</span>
        </button> */}

          <p className="btn btn-outline-light" >
            REFER & EARN
          </p>

          <p className="btn btn-outline-light" >
            SIGN UP
          </p>



        
      </div>
    </nav>
  </div>
  )
}

export default Navbar