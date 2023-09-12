import React, { Children } from 'react'
import Styled from '../Style/TechCommunity.module.css'
import Marquee from 'react-fast-marquee'
import {Container} from 'reactstrap'
import yellowVectore from '../Image/yellowVector.svg'
import { useState, useEffect, useRef } from "react";
export const Tech_Community = ({setActiveCourse,activeCourse}) => {

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

    const HiringPartner=[
        {image:"https://www.masaischool.com/images/new-homepage/community/community7.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community8.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community9.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community10.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community11.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community12.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community1.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community2.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community3.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community4.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community5.webp"},
        {image:"https://www.masaischool.com/images/new-homepage/community/community6.webp"},
       
    ]
  return (
    <>
        <Container ref={mainHeadingRef}>
            
             <div className={Styled.OurParterHeading} ref={mainHeadingRef}>
                <h1> Be A Part Of Our Thriving </h1>                    
                <h1 className={Styled.textColor}>Tech Community</h1>
                <img src={yellowVectore} alt="" className={Styled.Image}/>
             </div>
            <Marquee
              // gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
             
             
            >
             {HiringPartner.map((el)=>(
              <div className={Styled.childImage}>
                 <div className={Styled.sliderImage}>
                    <img src={el.image} alt="avnish" />
                 </div>
                  
                
                
              </div>
             ))}
            </Marquee>
             
              <div className={Styled.ButtonDiv}>
              <button className={Styled.JoinButton} >Join Our  Community </button>
              </div>
        </Container>
    </>
  )
}
