import React from "react";
import aboutbgimg from "../../assets/aboutbgimg2.jpeg";
import icon from "../../assets/ic_code_24px.png";

function Innovative() {
  const totalArray = [
    {
      total: "200+",
      text: "Customer",
    },
    {
      total: "120",
      text: "Office",
    },
    {
      total: "85",
      text: "Staff",
    },
    {
      total: "20+",
      text: "Projects",
    },
  ];
  const arr = [1, 2, 3];
  return (
    <div className="mt-59-px">
      <div className="inovation-info text-center">
        <h1 className=" f-70 color-primary fw-400 pt-77-px ">
          We are Advance Inovation
        </h1>
        <p className=" py-pb-26-77-px lightgray-color  f-30 fw-500 w-1000-px m-auto info-text-title">
          We challenge the status quo and adapt practices and solutions to
          tomorrow’s requirements We challenge the status <br /> quo and adapt
        </p>
      </div>

      <div className="office-info d-flex justify-content-evenly py-70-px">
        {totalArray.map((item) => (
          <div className="text-center">
            <h2 className="f-50 light-text-color f-86 fw-400 ">{item.total}</h2>
            <p className="f-30">{item.text}</p>
          </div>
        ))}
      </div>
      <div>
        <img src={aboutbgimg} width='100%' alt="" />
      </div>

      <div className=" text-center mb-177-px">
        <p className=" py-pb-26-77-px lightgray-color  f-46 fw-500 w-1163-px m-auto info-text-title">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </p>
        <p className="f-25 w-1359-px  m-auto ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="working bg-darkgray ">
        <h1 className=" f-60  fw-400 pt-177-px  text-center lightgray-color">
        Difference in working with us
        </h1>

        <div className="d-flex justify-content-center mt-87-px pb-240-px">
          <div>
            {arr.map((item) => (
              <div className="d-flex align-items-baseline mt-14-px">
                <img src={icon} width="13" alt="" />
                <p className="f-27 w-472-px   pl-50-px ">
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            ))}
          </div>
          <div>
            {arr.map((item) => (
              <div className="d-flex align-items-baseline ml-201-px mt-14-px">
                <img src={icon} width="13" alt="" />
                <p className="f-27 w-472-px pl-50-px ">
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovative;
