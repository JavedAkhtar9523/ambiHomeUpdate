import React from "react";
import "./CloudInfraSolution.css";
import FAQSection from "../FAQSection/FAQSection";
import ConsultNow from "../ConsultNow/ConsultNow";
import CloudBenefits from "./CloudBenefits";
import BusinessInsights from "./BusinessInsights";

const CloudInfraSolution = () => {
  const computeServices = Array(6).fill({
    title: "Compute Services",
    description:
      "Mobile app development is becoming increasingly popular for its various benefits such as:",
  });

  return (
    <>
      <div className="infrastructure-container">
        <div className="header-section">
          <h1>Our Comprehensive Cloud Infrastructure Solutions</h1>
          <p>
            Every detail is crafted with precision and undergoes multiple rounds
            of rigorous testing. Our dedicated team is committed to delivering
            comprehensive iPhone app development services under one roof. Our
            iPhone app development expertise has empowered clients to achieve
            their goals and thrive in their industries.
          </p>
        </div>

        <div className="services-container">
          {computeServices.map((service, index) => (
            <div className="service-row" key={index}>
              {index % 2 === 0 ? (
                // Left aligned service box
                <div className="service-box service-left">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ) : (
                // Right aligned service box
                <div className="service-box service-right">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <CloudBenefits />
      <BusinessInsights />
      <FAQSection />
      <ConsultNow />
    </>
  );
};

export default CloudInfraSolution;
