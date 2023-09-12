import React from 'react'

import styled from '../Style/TechCommunity.module.css'
export const LaunchTechCareer = () => {
  const HiringPartner = [
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/globallogic_c30eb641f7.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/simplilearn_f8af8de923.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatagri_d4794042fe.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/byjus_e7b97a9c80.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/eatfit_9dc276a187.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/smallcase_1740bcc33f.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg" },
    { image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg" },
  ]

 
  return (
    <>
          <div  className='container'>
           <div className={styled.OurParterHeading}>  
           <h1>Driven By <span className={styled.OutecomesSapn}>Outcomes</span> To Launch Your Career In Tech
           
           </h1>
           </div>
            
            <div className='row'>
              <div className="col-md-4 col-sm-12">
              
                <div className="col-md-12 col-sm-2 p-3 border rounded me-2" >
                  <p className='fs-5 fw-bold '><span className='badge  p-3 me-3 border rounded text-dark' >1</span> Launch Career</p>
                </div>
                <div className="col-md-12  col-sm-2  p-3  mt-2 border rounded">
                  <p className='fs-5 fw-bold '><span className='badge  p-3 me-3 border rounded text-dark'>2</span> Nature Ambition</p>
                </div>
                <div className="col-md-12 col-sm-2  p-3 mt-2 border rounded">
                  <p className='fs-5 fw-bold '><span className='badge  p-3 me-3 border rounded text-dark'>3</span> Practic Based </p>
                </div>
                <div className="col-md-12 col-sm-2  p-3 mt-2  border rounded">
                  <p className='fs-5 fw-bold '><span className='badge  p-3 me-3 border rounded text-dark'>4</span> Industry Readiness</p>
                </div>
                <div className="col-md-12 col-sm-2  p-3 mt-2 border rounded">
                  <p className='fs-5 fw-bold '><span className='badge  p-3 me-3 border rounded text-dark'>5</span> Holistic Development</p>
                </div>
               
               
              </div>
              <div className="col-md-8 col-sm-12 border rounded bg-light">
                <div className={styled.OurParterHeading}>
                  <h5>To Launch Your Sustainable Career</h5>
                </div>
                <div className={styled.VedioAndCTC}>
                <div className={styled.video}>
                <iframe width="489" height="296" src="https://www.youtube.com/embed/0867JeIfyLY" title="Cab Driver became Software Engineer – Meet Ashish Raj from Munger, Bihar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                 <div className={styled.Text}>
                  <div className={styled.CTC}>
                    <p><span>₹ 6.9 LPA </span> Average CTC</p>
                  </div>
                  <div className={styled.CTC}> <p><span>3500+ </span> Career Launchpad</p></div>
                  <div className={styled.CTC}> <p><span>4000+ Hiring Partners </span> Hiring Partners</p></div>
                </div>
                </div>
                  <div className={styled.compnayLogo}>
                  {HiringPartner.map((el) => (
                <div className={styled.childImage}>
                
                <img src={el.image} alt="avnish" />
              

            </div>
          ))}
                  </div>
              </div>
            
            </div>
          </div>
    </>
  )
}
