import React from "react";
import Layout from "../../Layout/index";
import HeroTitle from '../../components/common/HeroTitle';
import ContactInfo from "../../components/Contact/ContactInfo";

function Contact() {
  return (
    <div className="contact-wrapper">
      <Layout currentPage={3}>
        <HeroTitle title={'Get In Touch'} />
        <ContactInfo />
      </Layout>
    </div>
  );
}

export default Contact;
