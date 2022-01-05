import React from "react";
import tabsbgImg1 from "../../assets/tabbgimg1.png";
import tabsbgImg2 from "../../assets/tabbgimg2.png";
import arrowRight from "../../assets/arrow-right-white.png";
import clsx from "clsx";
import CustomButton from "../common/CustomButton";

function InfoSection() {
    const infoSectionArray = [
        {
            img:tabsbgImg2,
            title1:'Blockchain base',
            title2:'System',
            date:'Dec 12,2021',
            body:'We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt'
        },
        {
            img:tabsbgImg1,
            title1:'Blockchain base',
            title2:'System',
            date:'Dec 12,2021',
            body:'We challenge the status quo and adapt practices and solutions to tomorrow’s requirements We challenge the status quo and adapt'
        },
    ]
  return (
    <>
    {
        infoSectionArray.map( (item ,index) => (
            <div className=" mt-40-px bg-white pt-107-px">
        <div className={clsx("d-flex  justify-content-center align-items-center mt-28-px pb-123-px" , index==0 && 'flex-row-reverse' )}>
          <div>
            <img src={item.img} height="571" alt="" />
          </div>
          <div className="text">
            <h1 className="f-50 fw-600">{item.title1}</h1>
            <h1 className="f-50 fw-600">{item.title2}</h1>
            <p className="f-20 mt-5-px">{item.date}</p>
            <p className="w-337-px mt-38-px">
              {item.body}
            </p>

            <CustomButton />
          </div>
        </div>
      </div>

        ))
    }
  
    </>
  );
}

export default InfoSection;
