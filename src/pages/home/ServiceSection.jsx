// ServiceSection.jsx
import React from "react";
import "./services.css";
import serviceHome1 from "../../assets/cloud22 (8).jpg";
import serviceHome2 from "../../assets/cloud22 (7).jpg";
import serviceHome3 from "../../assets/cloud22 (6).jpg";
import serviceHome4 from "../../assets/cloud22 (2).jpg";

const ServiceCard = ({ title, description, image, actionText }) => (
  <div className="service-card">
    <div className="card-content">
      <div className="service-image">
        <img src={image} alt={title} />
        <div className="image-overlay"></div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="explore-button">
        <span>{actionText}</span>
        <svg className="arrow-icon" viewBox="0 0 24 24" width="20" height="20">
          <path
            d="M5 12h14m-6-6l6 6-6 6"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
    <div className="card-glow"></div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile Solution",
      description:
        "Transform your business with our innovative mobile solutions. Explore our services.",
      image: serviceHome1,
      actionText: "Mobile Solution explore",
    },
    {
      title: "Web Solution",
      description:
        "Enhance your online visibility, drive more traffic. Check our services today!",
      image: serviceHome2,
      actionText: "Web Solution explore",
    },
    {
      title: "Business Solution",
      description:
        "Elevate your business with Our expert solutions & accelerate your business growth.",
      image: serviceHome3,
      actionText: "E- Commerce Solution explore",
    },
    {
      title: "Web Designing Solution",
      description:
        "Boost Online Engagement with Our Responsive Web Design Services. Transform Your Digital landscape And Captivate Your Audience.",
      image: serviceHome4,
      actionText: "Web Designing Solution Explore",
    },
    {
      title: "Cloud Solution",
      description:
        "Accelerate Business Growth with Our Scalable Cloud Solutions. Streamline operations, secure data, and unlock efficiency with our cloud services.",
      image: serviceHome3,
      actionText: "Cloud Solution explore",
    },
    {
      title: "Digital Marketing Solution",
      description:
        "Maximize Online Visibility with Our Data-Driven Digital Marketing Strategies. Reach, engage, and convert your target audience.",
      image: serviceHome4,
      actionText: "Digital Solution explore",
    },
  ];

  return (
    <div className="services-section-ca">
      <div className="services-header-ca">
        <h1>Our Services</h1>
        <p>
          Power your edge-to-cloud platform with proven, transformative, and
          innovative IT products, solutions
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
