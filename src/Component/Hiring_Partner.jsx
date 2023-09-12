import React, { Children } from 'react'
import Styled from '../Style/Hiring.module.css'
import Marquee from 'react-fast-marquee'
import yellowVectore from '../Image/yellowVector.svg'

export const Hiring_Partner = () => {

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
      <div>

        <div className={Styled.OurParterHeading}>
          <h1 >Meet Our <span className={Styled.textColor}>4000+</span>Hiring Partners</h1>
          <img src={yellowVectore} alt="" className={Styled.Image} />
        </div>
        <Marquee
          // gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"

          gradientWidth="200"
        >
          {HiringPartner.map((el) => (
            <div className={Styled.childImage}>
              <div >
                <img src={el.image} alt="avnish" />
              </div>

            </div>
          ))}
        </Marquee>

      </div>
    </>
  )
}
