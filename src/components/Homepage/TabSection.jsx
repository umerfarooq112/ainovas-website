import React from "react";
import { Tabs } from "antd";
import arrowRight from "../../assets/arrow-right-white.png";
import tabsbgImg1 from "../../assets/tabbgimg1.png";
import tabsbgImg2 from "../../assets/tabbgimg2.png";
import CustomButton from '../common/CustomButton';

function TabSection() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="tabs-section--wrapper mt-110-px bg-white pt-107-px">
      <Tabs
        className="homepage--tabs"
        defaultActiveKey="1"
        tabBarGutter="9"
        onChange={callback}
        centered
      >
        <TabPane tab="Technology" key="1">
          <div className="d-flex justify-content-center align-items-center mt-28-px pb-123-px">
            <div>
              <img src={tabsbgImg1} height='571' alt="" />
            </div>
            <div className="text">
              <h1 className="f-50 fw-600">Blockchain base</h1>
              <h1 className="f-50 fw-600">System</h1>
              <p className="f-20 mt-5-px">Dec 12,2021</p>
              <p className="w-337-px mt-38-px">
                We challenge the status quo and adapt practices and solutions to
                tomorrow’s requirements We challenge the status quo and adapt
              </p>

                <CustomButton />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Business" key="2">
        <div className="d-flex justify-content-center align-items-center mt-28-px pb-123-px">
            <div>
              <img src={tabsbgImg1} height='702' alt="" />
            </div>
            <div className="text">
              <h1 className="f-50 fw-600">Blockchain base</h1>
              <h1 className="f-50 fw-600">System</h1>
              <p className="f-20 mt-5-px">Dec 12,2021</p>
              <p className="w-337-px mt-38-px">
                We challenge the status quo and adapt practices and solutions to
                tomorrow’s requirements We challenge the status quo and adapt
              </p>

              <button class="demo-btn mt-32-px">
                <span class="btn-icon">
                  <img src={arrowRight}  alt="" />
                </span>
                <span class="btn-text">Contact Us</span>
              </button>
            </div>
          </div>
        </TabPane>
        <TabPane tab="StockMarket" key="3">
          
        </TabPane>
        <TabPane tab="Robotics" key="4">
          
        </TabPane>
        <TabPane tab="Cars" key="5">
          
        </TabPane>
        <TabPane tab="Goods" key="6">
          
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabSection;
