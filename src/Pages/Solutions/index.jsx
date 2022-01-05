import React from "react";
import Layout from "../../Layout/index";
import HeroTitle from "../../components/common/HeroTitle";
import DigitalSolutions from '../../components/Solution/index';
import DigitalTransformation from "../../components/Solution/DigitalTransformation";

function Solution() {
  return (
    <div className="solution-wrapper">
      <Layout currentPage={2}>
        <HeroTitle title={"Solutions"} />
        <DigitalSolutions />
        <DigitalTransformation />
      </Layout>
    </div>
  );
}

export default Solution;
