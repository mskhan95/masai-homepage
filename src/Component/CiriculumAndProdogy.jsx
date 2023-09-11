import React from "react";
import "../Style/CiriculumAndProdogy.css";
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
        <div id="courseText0"></div>

        <div id="courseText1"></div>

        <div id="courseText2"></div>

        <div id="courseText3"></div>

        <div id="courseText4"></div>

        <div id="courseImage">
            <img src="" alt="course" />
        </div>
      </div>
    </div>
  );
}

export default CiriculumAndProdogy;
