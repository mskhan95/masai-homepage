import React from "react";
import { useState, useEffect, useRef } from "react";
import "../Style/CiriculumAndProdogy.css";
import courseImgage1 from "../Image/course-image1.webp"
import courseImgage2 from "../Image/course-image2.webp"
import courseImgage3 from "../Image/course-image3.webp"
import courseImgage4 from "../Image/course-image4.webp"
import courseImgage5 from "../Image/course-image5.webp"
function CiriculumAndProdogy({setActiveCourse,activeCourse}) {
    
    const courseDivRef = useRef();
    const courseRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        const handleScroll = () => {
          const courseDiv = courseDivRef.current;
    
          if (courseDiv) {
            const scrollPosition = courseDiv.scrollTop;
    
            
            const imageAppearThreshold = 300;
    
            if (scrollPosition >= imageAppearThreshold) {
              setActiveCourse(0); 
            } else {
              setActiveCourse(-1); 
            }
          }
        };
    
        if (courseDivRef.current) {
          // Add scroll event listener to the course-div
          courseDivRef.current.addEventListener("scroll", handleScroll);
    
          // Remove the event listener when the component unmounts
          return () => {
            courseDivRef.current.removeEventListener("scroll", handleScroll);
          };
        }
      }, []);
    
      useEffect(() => {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        };
    
        const handleIntersection = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCourse(
                parseInt(entry.target.id.replace("courseText", ""), 10)
              );
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersection, options);
    
        courseRefs.forEach((ref) => {
          observer.observe(ref.current);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);
      
    
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
      <div id="allScrolldivs" >
        <div className="course-div"ref={courseDivRef} > <div id="courseText0"ref={courseRefs[0]}>
          <h4>100% <span>live</span> distance learning</h4>
          <p >
            India’s only live tech-learning course with Tier 1 <br /> instructors. Get
            real-time feedback, interactive sessions & <br /> a personalised learning
            experience.
          </p></div>

        <div id="courseText1" ref={courseRefs[1]}>
        <h4>
          Generative  <span>AI integrated</span>  program
          </h4>
          <p >
           
          Harness & implement the power of AI in coding & data <br />analytics.
            What’s more? Use custom AI tools to enhance <br />placement preparation.
          
          </p>
        </div>

        <div id="courseText2"ref={courseRefs[2]}><h4><span>Industry Ready</span>  Curriculum
          </h4>
          <p >
            
          Our curriculum is regularly updated through industry <br />feedback.
            In-demand specialisations are added to aid our <br /> students launch
            sustainable careers.
          
          </p></div>

        <div id="courseText3"ref={courseRefs[3]}><h4>
          Focus on Learning  <span>Agility</span></h4>
          <p >
           
          We prioritise flexible thinking & continuous skill <br /> development. Stay
            nimble in an ever-changing world by <br /> embracing adaptability,
            curiosity & rapid learning.
          
          </p></div>

        <div id="courseText4"ref={courseRefs[4]}>
        <h4>
          Industry Ready in just  <span><br />25 - 35 weeks</span></h4>
          <p >
           
          Curriculum at Masai is designed to be intensive & <br /> extensive. With
            our unique pedagogy learn right in less <br /> time. All we ask is your
            dedication!
          
          </p>
        </div></div>
       

        <div id="courseImage">
        {[
            courseImgage1,
            courseImgage2,
            courseImgage3,
            courseImgage4,
            courseImgage5,
          ].map((image, index) => (
            <img
              key={index}
              src={image}
              alt="course"
              style={{
                opacity: activeCourse === null || activeCourse === index ? 1 : 0,
                visibility: activeCourse === null ? 'hidden' : 'visible'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CiriculumAndProdogy;
