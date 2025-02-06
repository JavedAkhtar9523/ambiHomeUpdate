import React from "react";
import "./EdgeComputing.css";
import EdgeComputingFeatures from "./EdgeComputingFeatures";
import EdgeBenefits from "./EdgeBenefits";
import EdgeUseCases from "./EdgeUseCases";
import ServerRoom from "./ServerRoom";
import FAQSection from "../FAQSection/FAQSection";
import ConsultNow from "../ConsultNow/ConsultNow";

const EdgeComputing = () => {
  return (
    <>
      <div className="hero-container-edge">
        <div className="hero-overlay-edge"></div>
        <div className="hero-content-edge">
          <h1>Unlock the Power of Edge Computing</h1>
          <p style={{ color: "#fff" }}>
            Transform Your Business with Faster, Smarter, and More Secure
            Computing
          </p>
        </div>
      </div>
      <EdgeComputingFeatures />
      <EdgeBenefits />
      <EdgeUseCases />
      <ServerRoom />
      <FAQSection />
      <ConsultNow />
    </>
  );
};

export default EdgeComputing;
