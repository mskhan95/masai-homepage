import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Style/masaiInNews.css";
function MasaiInNews({setActiveCourse,activeCourse}) {
  return (
    <div>
      <h2 className="masaiInNewsHeading">
        Masai In{" "}
        <span>
          News{" "}
          <img
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt=""
          />
        </span>{" "}
      </h2>
      <div className="all_Image">
        <div>
          <img
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg"
            alt=""
            srcset=""
          />
          <h4>Empowering Education Through GenAI</h4>
        </div>
        <div>
          <img
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp"
            alt=""
          />{" "}
          <h4>Masai School targets fivefold revenue growth in three yearsI</h4>
        </div>
        <div>
          {" "}
          <img
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp"
            alt=""
          />
          <h4>
            Beyond Degrees: Embracing Alternative Credentialing and
            Micro-learning in Tech Recruitment
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MasaiInNews;
