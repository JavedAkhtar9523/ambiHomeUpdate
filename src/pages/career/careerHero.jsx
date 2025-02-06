// import React from "react";
// import { FaChevronRight } from "react-icons/fa";
// import "./Career.css";
// import careerImage from "../../images/careerImage.jpg";

// export default function CareerHero() {
//   return (
//     <div className="career-hero">
//       <div className="hero-content-career">
//         <span className="company-label">CAREERS AT MOTHERSHIP</span>
//         <h1>Build what the world needs.</h1>
//         <p>
//           We're shaping the future of freight and logistics. If you're excited
//           by the prospect of unlocking the world's potential by speeding up the
//           way goods move, join us.
//         </p>
//         <a href="#positions" className="cta-link">
//           See Open roles <FaChevronRight className="icon" />
//         </a>
//       </div>
//       <div className="hero-image-opportunity">
//         {/* Replace with your actual image */}
//         <img src={careerImage} alt="Career opportunities" />
//       </div>
//     </div>
//   );
// }

// Hero.js
import React from "react";
import "./CareerHero.css";
import careerHeroImg from "../../assets/careerHeromain.png";

const CareerHero = () => {
  return (
    <div className="hero-container-caree">
      <div className="hero-content-caree">
        <h1>Build what the world needs.</h1>
        <p style={{ color: "#fff" }}>
          We're shaping the future of freight and logistics. If you're excited
          by the prospect of unlocking the world's potential by speeding up the
          way goods move, join us.
        </p>
      </div>
      {/* <div className="floating-elements">
        <div className="laptop">
          <img src="/laptop.png" alt="Laptop" className="laptop-img" />
        </div>
        <div className="element lightbulb">
          <img src="/lightbulb.png" alt="Light bulb" />
        </div>
        <div className="element pie-chart">
          <img src="/pie-chart.png" alt="Pie chart" />
        </div>
        <div className="element photos">
          <img src="/photos.png" alt="Photos" />
        </div>
        <div className="element color-palette">
          <img src="/color-palette.png" alt="Color palette" />
        </div>
        <div className="element coffee">
          <img src="/coffee.png" alt="Coffee cup" />
        </div>
        <div className="element tools">
          <img src="/tools.png" alt="Design tools" />
        </div>
        <div className="element notebook">
          <img src="/notebook.png" alt="Notebook" />
        </div>
      </div> */}
      <div className="careerHeroCont">
        <img src={careerHeroImg} alt="careerHero" className="careerHeroImg" />
      </div>
    </div>
  );
};

export default CareerHero;
