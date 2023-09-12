import React from 'react';
import { Text, Heading, Box} from '@chakra-ui/react'
import Our_courses_box from './Our_courses_box';
import full_stack from '../Image/full_stack.png'
import backend from '../Image/backend_image.png'
import yellow_vector from '../Image/yellow-vector.svg'
import './Our_courses.css'
import { useState, useEffect, useRef } from "react";
function Our_courses({setActiveCourse,activeCourse}) {

  const ourParterHeadingRef = useRef();
  const mainHeadingRef = useRef();

  useEffect(() => {
    // Define a function to handle intersection
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          setActiveCourse(null);
        }
      });
    };

    // Create an IntersectionObserver instance for "OurParterHeading"
    const ourParterHeadingObserver = new IntersectionObserver(
      handleIntersection
    );

    // Observe the "OurParterHeading" div if it exists
    if (ourParterHeadingRef.current) {
      ourParterHeadingObserver.observe(ourParterHeadingRef.current);
    }

    // Create an IntersectionObserver instance for "mainheading"
    const mainHeadingObserver = new IntersectionObserver(handleIntersection);

    // Observe the "mainheading" div if it exists
    if (mainHeadingRef.current) {
      mainHeadingObserver.observe(mainHeadingRef.current);
    }

    // Cleanup the observers when the component unmounts
    return () => {
      ourParterHeadingObserver.disconnect();
      mainHeadingObserver.disconnect();
    };
  }, []);

    return (

      <div style={{marginTop:"50px"}}>
      <Box  style={{display: "flex", justifyContent:"center"}}>
    <Heading fontSize={'45px' }>Our Courses</Heading></Box>
    <div>
    <h3 className="mainheading2">
    Practice-Based Learning Tracks, 
    <span>
     Supercharged By A.I. 
    </span> 
  </h3>
  <div style={{display:"flex", justifyContent:"center"}}>
    <img
        src={yellow_vector}
        alt=""
     /></div>
  </div>

        <div className='courseContainer'>
            <Our_courses_box full_stack={full_stack} color={"#b7b8e5"} title={"Full Stack Web Development"}/>
            <Our_courses_box full_stack={backend} color={"#e5c9b7"} title={"Backend Development"}/>
        </div>

        <div style={{display:"flex", justifyContent:"center", margin:"24px 0 24px 0" }} ref={mainHeadingRef}>
          <button className='viewAllCourses'>VIEW ALL COURSES</button>
        </div>
    </div>
    );
}



export default Our_courses;