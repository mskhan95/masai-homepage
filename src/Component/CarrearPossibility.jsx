import React from "react";
import "../Style/CarrearPossibility.css";
function CarrearPossibility(props) {
  return (
    <div >
        <div id="upperDiv">
        <div className="CareerPossibility">
        <h2>
          <span>
            Elevate {" "}
            <img
              className="VectorLine"
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt=""
            />
          </span>
          Your Career Possibilities
        </h2>
        <p className="DreamCareerContainer">
          It doesn’t matter where you come from, we know <br /> how to get you to your
          dream career.
        </p>
        <p className="aboutDetails">
          Our graduates consistently outperform students from top Indian
          engineering <br /> colleges & universities. 70% of companies who have hired 1
          Masai graduate come <br /> back to us with their hiring mandates.
        </p>
        <div className="button_div_for_apply_Now">
          <button>Apply now</button>
        </div>
      </div>
      <div className="youtubevideo">
      <iframe width="614" height="346" style={{borderRadius:"15px"}} src="https://www.youtube.com/embed/Ji0ICdxTdqc" title="No Matter Your Background, Get Your Dream Career | Skilled By Masai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
        </div>
    
    </div>
  );
}

export default CarrearPossibility;
