import React from "react";
import img1 from "../../assets/project-img-1.png";
import img2 from "../../assets/project-img-2.png";
import img3 from "../../assets/project-img-3.png";
import img4 from "../../assets/project-img-4.png";
import img5 from "../../assets/project-img-5.png";
import img6 from "../../assets/project-img-6.png";
function InfoCards() {
  const cardRowOne = [
    {
      img: img1,
      title: "Blockchain base System",
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt",
    },
    {
      img: img2,
      title: `Blockchain base System`,
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt",
    },
    {
      img: img3,
      title: "Blockchain base  System",
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt",
    },
  ];
  const cardRowTwo = [
    {
      img: img4,
      title: "Blockchain base System",
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt",
    },
    {
      img: img5,
      title: `Blockchain base System`,
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt",
    },
    {
      img: img6,
      title: "Blockchain base  System",
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt",
    },
  ];

  return (
    <div className="mt-95-px info-cards">
      <p className="text-center lightgray-color  f-30 fw-500 w-1000-px m-auto info-text-title">
        We challenge the status quo and adapt practices and solutions to
        tomorrow’s requirements We challenge the status <br /> quo and adapt
      </p>

      {/* d-flex justify-content-between */}
      <div className=" row  px-105-px mt-138-px ">
        {cardRowOne.map((item) => (
          <div className="project-card col-4 mt-130-px">
            <img src={item.img} className="img" alt="" />
            <div className="text pt-34-px pl-45-px">
              <h2 className="f-40 fw-bold cards-title">
              {item.title}


              </h2>
              <p className="f-25 mt-20-px pb-95-px">
                {item.text}
              </p>
            </div>
          </div>
          
         ))}
      </div>
      <div className="row px-105-px mt-110-px ">
        {cardRowTwo.map((item) => (
          <div className="col-4 project-card mt-130-px">
            <img src={item.img} className="img" alt="" />
            <div className="text pt-34-px pl-45-px">
              <h2 className="f-40 fw-bold cards-title">
              {item.title}


              </h2>
              <p className="f-25 mt-20-px pb-95-px">
                {item.text}
              </p>
            </div>
          </div>
          
         ))}
      </div>
    </div>
  );
}

export default InfoCards;
