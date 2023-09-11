import React from 'react';
import './Our_courses_box.css'
import { CiCircleCheck } from "react-icons/ci";

function Our_courses_box(props) {
    return (
        <>
        <div className='maincontainer' style={{"box-shadow": "0px 6px 34px 0px rgba(215, 216, 222, 0.41)","width":"400px", borderRadius:"2%"}}>
          <div className='TopImgdiv' style={{"backgroundColor":props.color,borderRadius:"2% 2% 0 0", display:"flex", justifyContent:"center", padding:"8% 0 8% 0" }}> <img src={props.full_stack}/> 
        </div>

        <div style={{padding:"1.5rem"}}>
        <div>
            <p style={{"font-weight":"bold",fontSize:"24px", margin:"0 0 0 0" }}>{props.title}</p>
            <p style={{margin:"4px 0 12px 0", color:"#544D4F"}}>Become job-ready in 30 weeks</p>
        </div>
        <hr style={{margin:"6px 0 6px 0", color:"#CECCCD"}}/>
        <div  style={{marginTop: "1rem"}}>

        <div>
        <li className='list'>
        <CiCircleCheck />
        <strong style={{margin:"0 0 0 6px"}}>
        Opportunities:</strong> Full Stack Developer, Software Engineer & much more.
        </li> <div>
        

        <div className='list' style={{display:"flex", alignItems:"center"}}>
        <CiCircleCheck />
        <li style={{margin:"0 0 0 6px"}}>100% live learning with expert instructors.</li>
        </div>

        <div className='list' style={{display:"flex", alignItems:"center"}}>
        <CiCircleCheck />
        <li style={{margin:"0 0 0 6px"}}>Pay After Placement</li>
        </div>

        </div>
        </div>
       
         <button style={{width:"100%",border: "none",color: "white", borderRadius:"8px", margin:"32px 0 0 0" ,padding:"12px 16px" ,background:"#ED0331", fontWeight: "600!important", fontSize:"14px" }}>VIEW DETAILS</button>   
        </div>
        </div>
        </div>
        </>
    );
}

export default Our_courses_box;