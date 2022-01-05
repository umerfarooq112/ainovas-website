import React from "react";
import Layout from "../../Layout/index";
import HeroTitle from '../../components/common/HeroTitle';
import InfoCards from "../../components/Project/InfoCards";

function Project() {
  return (
    <div className="project-wrapper">
      <Layout currentPage={4}>
          <HeroTitle title={'Project'} />
          <InfoCards />
      </Layout>
    </div>
  );
}

export default Project;
