import React from "react";
import strategyIcon from "../../assets/strategy.png";
import analysisIcon from "../../assets/analysis.png";
import commerceIcon from "../../assets/commerce.png";
import peopleIcon from "../../assets/people.png";
import outsourcingIcon from "../../assets/outsourcing.png";

function DigitalSolutions() {

  const digitalLeftArray = [ 
    {
      icon: strategyIcon,
      text: 'Strategy'
    },
    {
      icon: analysisIcon,
      text: 'Analytics'
    },
    {
      icon: commerceIcon,
      text: 'Commerce'
    },
]
  const digitalRightArray = [ 
    {
      icon: peopleIcon,
      text: 'People'
    },
    {
      icon: outsourcingIcon,
      text: 'Outsourcing'
    },
  
]
  
  return (
    <div className="mt-95-px">
      <h1 className="text-center f-70 color-primary fw-400 ">
        EXTENSIVE EXPERIENCE AND EXPERTISE
      </h1>

      <div className="digitals-icon-section d-flex justify-content-center mt-183-px">
        <div className="left">
          <h5 className="f-35 fw-bold">Digital Transformation & Automation</h5>

          <div className="icons-section d-flex  text-center mt-132-px">
            {digitalLeftArray.map(item => (
              <div>
                <img src={item.icon} alt="" />
                <p className="mt-32-px fw-600 f-31">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="right ml-350-px">
          <h5 className="f-35 fw-bold">Digital Operation</h5>
          <div className="icons-section d-flex  text-center mt-132-px">
          {digitalRightArray.map(item => (
              <div>
                <img src={item.icon} alt="" />
                <p className="mt-32-px fw-600 f-31">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalSolutions;
