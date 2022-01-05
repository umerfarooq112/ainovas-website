import React from "react";
import MailIcon from "../../assets/mail-icon.png";
import PhoneIcon from "../../assets/phone-icon.png";

function ContactInfo() {
  const cards = [
    {
      icon: PhoneIcon,
      title: "Mobile",
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements",
      contact: "+92 321 4567890",
    },
    {
      icon: MailIcon,
      title: "Email",
      text: "We challenge the status quo and adapt practices and solutions to tomorrow’s requirements",
      contact: "xyz321@gmail.com",
    },
  ];
  return (
    <div className="mt-95-px">
      <p className="text-center f-30">
        Want's to get in touch ? we would love to hear from you. Here is how you
        can reach us
      </p>

      <div className="contact-cards mt-138-px d-flex justify-content-center mb-200-px px-240-px ">
        {cards.map((Item) => (
          <div className="info-card">
            <img src={Item.icon} className="mt-87-px" />
            <h2 className="f-30 mt-14-px">{Item.title}</h2>
            <p className="mt-28-px f-25 p1-text ">
              {Item.text}
            </p>
            <p className="f-30 color-primary mt-16-px mb-81-px">
              {Item.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
