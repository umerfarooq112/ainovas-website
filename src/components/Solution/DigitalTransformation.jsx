import React from "react";
import rightnIcon from "../../assets/ic_code_24px.png";
import solutionbgleft from "../../assets/solutionbgImgleft.png";
import solutionbgright from "../../assets/solutionbgImgright.png";

function DigitalTransformation() {
  const sectionFirstData = [
    {
      title: "Strategy",
      paragraph1:
        "Working hand-in-hand with our clients to transform strategies into tangible improvements",
      paragraph2: "Bringing the best out of people and organizations",
    },
    {
      title: "Analytics",
      paragraph1:
        "Working hand-in-hand with our clients to transform strategies into tangible improvements",
      paragraph2:
        "Bringing the best out of people and organizations",
    },
    {
      title: "Commerce",
      paragraph1:
        "Working hand-in-hand with our clients to transform strategies into tangible improvements",
      paragraph2:
        "Bringing the best out of people and organizations",
    },
  ];
  const sectionTwoData = [
    {
      title: "People",
      paragraph1:
        "Working hand-in-hand with our clients to transform strategies into tangible improvements",
      paragraph2: "Bringing the best out of people and organizations",
    },
    {
      title: "Outsourcing",
      paragraph1:
        "Working hand-in-hand with our clients to transform strategies into tangible improvements",
      paragraph2:
        "Bringing the best out of people and organizations",
    },
  ];
  return (
    <div className=" mt-189-px digital-transformation pb-240-px">
        <div className="ml-201-px">
            <h1 className=" f-55  fw-800 ">Digital Transformation & Automation</h1>
            {
                // first Section 
            }
            <div className="d-flex justify-content-between ">
                <div className="left-info mt-110-px">
                {sectionFirstData.map((item) => (
                    <div>
                    <h2 className="pl-66-px f-40 fw-bold">{item.title}</h2>
                    <div className="d-flex mt-16-px align-items-baseline">
                        <img src={rightnIcon} width="15" height="24" alt="" />
                        <p className="text-icon pl-50-px f-27 ">
                        {item.paragraph1}
                        </p>
                    </div>
                    <div className="d-flex mt-16-px align-items-baseline">
                        <img src={rightnIcon} width="15" height="24" alt="" />
                        <p className="text-icon pl-50-px f-27 ">
                        {item.paragraph2}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
                <div className="right-bg-img">
                <img src={solutionbgleft} alt="" />
                </div>
            </div>

        </div>
      {
          // Second Section
      }

       <div className="d-flex flex-row-reverse justify-content-between align-items-center">
           
        <div className="left-info mt-110-px pr-150-px">
          <h1 className=" f-55  fw-800 ">Digital Operation</h1>

          {sectionTwoData.map((item) => (
            <div>
              <h2 className="pl-66-px f-40 fw-bold">{item.title}</h2>
              <div className="d-flex mt-16-px align-items-baseline">
                <img src={rightnIcon} width="15" height="24" alt="" />
                <p className="text-icon pl-50-px f-27 ">
                 {item.paragraph1}
                </p>
              </div>
              <div className="d-flex mt-16-px align-items-baseline">
                <img src={rightnIcon} width="15" height="24" alt="" />
                <p className="text-icon pl-50-px f-27 ">
                {item.paragraph2}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-bg-img">
          <img src={solutionbgright}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default DigitalTransformation;
