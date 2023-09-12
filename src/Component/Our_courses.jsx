import React from 'react';
import { Text, Heading, Box} from '@chakra-ui/react'
import Our_courses_box from './Our_courses_box';
import full_stack from '../Image/full_stack.png'
import backend from '../Image/backend_image.png'
import yellow_vector from '../Image/yellow-vector.svg'
import './Our_courses.css'
import { useState, useEffect, useRef } from "react";
function Our_courses({setActiveCourse,activeCourse}) {

  useEffect(() =>{

setActiveCourse(null);
  },[])
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

            <div style={{display:"flex", justifyContent:"center", margin:"24px 0 24px 0" }}>
              <button className='viewAllCourses'>VIEW ALL COURSES</button>
            </div>
        </div>
    );
}

// style={{width:"18%",border: "none",color: "white", borderRadius:"8px", margin:"32px 0 0 0" ,padding:"12px 16px" ,background:"#ED0331", fontWeight: "600!important", fontSize:"14px" }}

export default Our_courses;