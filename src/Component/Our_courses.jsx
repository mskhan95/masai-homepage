import React from 'react';
import Our_courses_box from './Our_courses_box';
import full_stack from '../Image/full_stack.png'
import backend from '../Image/backend_image.png'
import './Our_courses.css'

function Our_courses(props) {
    return (
        <div>
        <div className='mainheading'> <h1>Our Courses </h1></div>

        <h2 className="mainheading2">
        Practice-Based Learning Tracks, 
        <span>
         Supercharged By A.I.
          <img
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt=""
          />
        </span>
      </h2>

            <div style={{display:"flex",margin:"2% 0 2% 0",gap:"3%",justifyContent:"center" }}>
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