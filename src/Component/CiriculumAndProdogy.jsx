import React from "react";
import "../Style/CiriculumAndProdogy.css";
import courseImgage1 from "../Image/course-image1.webp"
import courseImgage2 from "../Image/course-image2.webp"
import courseImgage3 from "../Image/course-image3.webp"
import courseImgage4 from "../Image/course-image4.webp"
import courseImgage5 from "../Image/course-image5.webp"
function CiriculumAndProdogy(props) {
  return (
    <div>
      <h2 className="masaiInCiriculumHeading">
        Best-in-Class{" "}
        <span>
          Curriculum{" "}
          <img
            className="firstVector"
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt=""
          />
        </span>
        &{" "}
        <span>
          Pedagogy
          <img
            className="secondVector"
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt=""
          />
        </span>{" "}
      </h2>
      <div id="allScrolldivs">
        <div id="courseText0">
          <h4>100% <span>live</span> distance learning</h4>
          <p >
            India’s only live tech-learning course with Tier 1 instructors. Get
            real-time feedback, interactive sessions & a personalised learning
            experience.
          </p></div>

        <div id="courseText1"></div>

        <div id="courseText2"></div>

        <div id="courseText3"></div>

        <div id="courseText4"></div>

        <div id="courseImage">
            <img src={courseImgage1} alt="course" />
            <img src={courseImgage2} alt="course" />
            <img src={courseImgage3} alt="course" />
            <img src={courseImgage4} alt="course" />
            <img src={courseImgage5} alt="course" />
        </div>
      </div>
    </div>
  );
}

export default CiriculumAndProdogy;
