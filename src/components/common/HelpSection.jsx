import React from "react";
import arrowRight from "../../assets/arrow-right-white.png";
import CustomButton from "./CustomButton";
function HelpingSection() {
  return (
    <div className="help-section mt-140-px text-light  d-flex flex-column align-items-center justify-content-center text-center">
      <div className="  ">
        <h2 className="f-86 color-primary fw-400 m-0">How can we help you ?</h2>
        <p className="f-46">Get in touch with us</p>
        <CustomButton />
      </div>
    </div>
  );
}

export default HelpingSection;
