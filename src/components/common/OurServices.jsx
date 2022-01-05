import React from "react";
import goal from "../../assets/goal.png";
import elevator from "../../assets/elevator.png";
import integration from "../../assets/integration.png";
import invention from "../../assets/invention.png";
import mortarboard from "../../assets/mortarboard.png";
import precision from "../../assets/precision.png";
function OurServices() {
  const serviceArrayOne = [
    {
      icon: goal,
      title: "We Pioneer",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
    {
      icon: mortarboard,
      title: "We Pioneer",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
    {
      icon: integration,
      title: "We Pioneer",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
  ];
  const serviceArrayTwo = [
    {
      icon: invention,
      title: "We Pioneer",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
    {
      icon: elevator,
      title: "We Pioneer",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
    {
      icon: precision,
      title: "We Pioneer",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    },
  ];
  return (
    <div className="our-services mt-225-px text-center">
      <h2 className="f-70 fw-800 ">Our Services</h2>
      <div className="service1 row  mt-66-px">
        {serviceArrayOne.map((item) => (
          <div className="three-side-triangle col-4">
            <div class="triangle"></div>
            <div className="traingle-div">
              <img src={item.icon} alt="" />
              <h6 className="f-27 mt-32-px fw-bold">{item.title}</h6>
              <p className="f-22 mt-18-px">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="service2 container m-auto row mt-66-px">
        {serviceArrayTwo.map((item) => (
          <div className="three-side-triangle col-4">
            <div class="triangle"></div>
            <div className="traingle-div">
              <img src={item.icon} alt="" />
              <h6 className="f-27 mt-32-px fw-bold">{item.title}</h6>
              <p className="f-22 mt-18-px">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
