import React from "react";
import Layout from "../../Layout/index";
import HeroTitle from "../../components/common/HeroTitle";
import Innovative from "../../components/About/Innovative";

import OurServices from '../../components/common/OurServices';

function About() {
  return (
    <div className="about-wrapper"> 
      <Layout currentPage={1}>
        <HeroTitle title={"About"} />
          <Innovative />
          <OurServices />
      </Layout>
    </div>
  );
}

export default About;
