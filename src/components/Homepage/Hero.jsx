import React from "react";

import {ReactComponent as AnimatedLogoBg } from '../../assets/bg-logo-img.svg'
import CustomButton from "../common/CustomButton";

function Hero() {
  return (
    <div className="hero mt-120-px pt-292-px text-center ">
      <div className="hero-text ">
          <h1 className=" f-96 fw-bold color-primary">ADVANCE</h1>
          <h1 className="f-175 fw-bold color-primary">INOVATION</h1>
          <p className="f-40 color-purple">
            END-TO-END CONSULTANCY & SOLUTION PROVIDER
          </p>
        
        <div className='mt-66-px pb-180-px'>
          <CustomButton  />

        </div>
      </div>

      
        <AnimatedLogoBg className="animated--Logo" />
      


    </div>
  );
}

export default Hero;
