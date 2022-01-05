import logo from "../../assets/logo.png";

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-wrapper bg-footer-color ">
      <div className="d-flex justify-content-between  pt-75-px">
        <div className="logo-div">
          <img src={logo} alt="" />
          <div>
            <ul className="d-flex mt-40-px pl-20-px">
              <li>
                <a href="" className="">
                  Item1
                </a>
              </li>
              <li>
                <a href="" className="pl-20-px">
                  Item1
                </a>
              </li>
              <li>
                <a href="" className="pl-20-px">
                  Item1
                </a>
              </li>
              <li>
                <a href="" className="pl-20-px">
                  Item1
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links-div color-footer-lighttext ">
          <div className="quick-links">
            <h4 className="mb-0 f-32 fw-bold">Quick Links</h4>
            <div className="d-flex flex-column mt-16-px">
              <Link className="letter-spacing-2">Home</Link>
              <Link className="mt-10-px letter-spacing-2">VALUES</Link>
              <Link className="mt-10-px letter-spacing-2">SOLUTION</Link>
              <Link className="mt-10-px letter-spacing-2">CAPABILITIES</Link>
              <Link className="mt-10-px letter-spacing-2">PROJECTS</Link>
            </div>
          </div>
          <div className="contact-us px-130-px  ">
            <h4 className="mb-0 f-32 fw-bold">Contact Us</h4>
            <p className="mt-16-px  ">+923122245679</p>
            <p className="mt-10-px mb-0">+923122245679</p>
            <p className="mt-10-px mb-0">xyz123@gmail.com</p>
          </div>
          <div className="locations">
            <h4 className="mb-0 f-32 fw-bold">Contact Us</h4>
            <p className="mt-16-px mb-0 w-216-px">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
      <div className="text-center copyright-text mt-40-px ">
        <p className="m-0">© Copyright Prism 2021. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
