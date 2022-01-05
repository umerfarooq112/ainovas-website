import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import HelpingSection from "../components/common/HelpSection";

function Layout({ children, currentPage }) {
  return (
    // <div dir='rtl'>
    <div className="">
      <Navbar currentPage={currentPage} />
      {children}
      <HelpingSection />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default Layout;
