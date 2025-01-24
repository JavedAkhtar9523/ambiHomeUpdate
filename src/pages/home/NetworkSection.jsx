// import React, { useRef, useEffect, useState } from "react";
// import ambiup from "../../images/ambiup.mp4";
// import officediscussingImg from "../../assets/office-discussing.avif";
// import empowerImg1 from "../../assets/empowerImg1.jpg";
// import learnImg from "../../assets/learn.jpg";
// import connectedImg from "../../assets/connect.avif";
// import { Link } from "react-router-dom";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { HiMiniUserGroup } from "react-icons/hi2";
// import { RiShareForwardFill } from "react-icons/ri";
// import { MdLeaderboard } from "react-icons/md";
// import maximize from "../../assets/maximize.jpg";

// export default function HomeUpdateSecond() {
//   const spreadsServices = [
//     {
//       src: empowerImg1,
//       Icon: <HiMiniUserGroup />,
//       alt: "Image 2",
//       text: "Emphasizes the importance of accessing valuable resources and support through a strong network and follow your passion with following your choices.",
//       headText: "Empower your life",
//     },
//     {
//       src: learnImg,
//       alt: "Image 3",
//       Icon: <MdLeaderboard />,
//       headText: "Learn new skills",
//       text: "Learning is an endless process, and its impact is infinite. Never stop learning and together, let's reach new heights and expand your network.",
//     },
//     {
//       src: connectedImg,
//       alt: "Image 4",
//       Icon: <RiShareForwardFill />,
//       headText: "Connect, Capture, and Share",
//       text: "Connect with the world at your fingertips. Think, express, and share your ideas globally. Spread your wings and soar to new heights!",
//     },
//   ];

//   return (
//     <div>
//       <section className="home-hero">
//         <div className="home-video-container">
//           <video autoPlay loop muted className="home-background-video">
//             <source src={ambiup} type="video/mp4"></source>
//           </video>
//         </div>
//         <div className="home-hero-overlay">
//           <div className="home-hero-content">
//             <div className="home-hero-left">
//               <h1 className="home-hero-title">
//                 Embracing The Future OF <br /> Technology
//               </h1>
//               <p className="home-hero-description" data-aos="fade-right">
//                 Discover the latest advancements in cloud computing, AI, and
//                 data analytics. Join us in the transformation.
//               </p>
//               <div className="home-cta-container">
//                 <button className="home-primary-btn">
//                   <Link
//                     to="/services/software-development-services"
//                     className="home-link"
//                   >
//                     Explore Technologies{" "}
//                     <FaLongArrowAltRight className="home-explore-tech-icon" />
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="spread-container">
//         <div className="spread-top">
//           <div className="spread-network-img-container">
//             <img
//               src={officediscussingImg}
//               className="spread-network-img"
//               alt="Office Discussion"
//             />
//           </div>
//           <div className="spread-content-right">
//             <h2 className="spread-section-title" data-aos="fade-up">
//               Spread Your Wings, Expand Your Network
//             </h2>
//             <p className="spread-section-description" data-aos="fade-up">
//               Expand your reach and influence. Grow your connections, increase
//               your opportunities, and access valuable resources.
//             </p>
//             <Link
//               to="/product"
//               className="network-learn-more-link"
//               data-aos="fade-up"
//             >
//               Learn More <FaLongArrowAltRight />
//             </Link>
//           </div>
//         </div>

//         <div className="container">
//           <div className="spead-ser-top row">
//             <div className="col-md-6 col-12 pb-2">
//               <h3 className="spead-ser-head">
//                 Connect, Learn, Grow
//                 <br />
//                 Your premier destination for professional growth and networking
//               </h3>
//             </div>
//             <div className="col-md-6 col-12">
//               <p className="spead-ser-subtitle">
//                 A strong network provides valuable support and tools,
//                 highlighting potential for new experiences.
//               </p>
//             </div>
//           </div>
//           <div className="row mt-4">
//             {spreadsServices.map((data, index) => (
//               <div key={index} className="col-md-4 col-12 service-card">
//                 <h4 className="icon-wrapper">{data.Icon}</h4>
//                 <h4 className="spead-ser-head-text">{data.headText}</h4>
//                 <p className="spead-ser-subtitle-text">{data.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="home-body-section">
//         <div className="maximize-top-container">
//           <h2 className="maximize-heading">
//             Maximize Efficiency with <br /> Intelligent Automation
//           </h2>
//           <p className="maximize-subtitle">
//             Join our vibrant digital community platform at AMBISPINE
//             TECHNOLOGIES.
//           </p>
//         </div>
//         <div className="maximize-mid-top">
//           <div className="maximize-img-container">
//             <img
//               src={maximize}
//               className="maximize-img"
//               alt="Office Discussion"
//             />
//           </div>
//           <div className="maximize-content-right">
//             <h2 className="spread-section-title" data-aos="fade-up">
//               Elevate Your Business with Cloud Expertise
//             </h2>
//             <p className="spread-section-description" data-aos="fade-up">
//               Connect, collaborate, and foster creativity on our platform.
//               Unlock endless possibilities with innovative solutions.
//             </p>
//             <Link
//               to="/product"
//               className="network-learn-more-link"
//               data-aos="fade-up"
//             >
//               Learn More <FaLongArrowAltRight />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./HomeSection.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiShareForwardFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";

import officediscussingImg from "../../assets/office-discussing.avif";
import empowerImg1 from "../../assets/empowerImg1.jpg";
import learnImg from "../../assets/learn.jpg";
import connectedImg from "../../assets/connect.avif";
import maximize from "../../assets/maximize.jpg";

export default function NetworkSection() {
  const spreadsServices = [
    {
      src: empowerImg1,
      Icon: <HiMiniUserGroup />,
      alt: "Image 2",
      text: "Emphasizes the importance of accessing valuable resources and support through a strong network and follow your passion with following your choices.",
      headText: "Empower your life",
    },
    {
      src: learnImg,
      alt: "Image 3",
      Icon: <MdLeaderboard />,
      headText: "Learn new skills",
      text: "Learning is an endless process, and it's impact is infinite. Never stop learning and together, let's reach new heights expand your network",
    },
    {
      src: connectedImg,
      alt: "Image 4",
      Icon: <RiShareForwardFill />,
      headText: "Connect, Capture And Share",
      text: "Connect with the world at your fingertips. Think, express and share your ideas with the globe. Spread your wings and soar to new heights feel connection here!",
    },
  ];

  return (
    <div className="home-container">
      <div className="spread-container">
        <div className="spread-top">
          <div className="spread-network-img-container">
            <img
              src={officediscussingImg}
              className="spread-network-img"
              alt="Office Discussion"
            />
          </div>
          <div className="spread-content-right">
            <h2 className="section-title">
              Spread Your Wings, Expand Your Network
            </h2>
            <p className="section-description">
              Expand your reach and influence. Grow your connections, increase
              your opportunities, and access to resources. Make a bond with new
              possibilities and horizons.
            </p>
            <Link to="/product" className="learn-more-link">
              Learn More <FaLongArrowAltRight className="arrow-icon" />
            </Link>
          </div>
        </div>

        <div className="services-container">
          <div className="services-header">
            <div className="services-title-col">
              <h3
                className="services-main-title"
                style={{ color: "darkslateblue", fontWeight: "500" }}
              >
                Connect Learn Grow <br />
                Your premier destination for professional growth and networking
              </h3>
            </div>
            <div className="services-subtitle-col">
              <p
                className="services-subtitle"
                style={{ color: "darkslateblue" }}
              >
                Implies that a stronger network can provide valuable support and
                tools highlights the potential for new experiences and
                possibilities
              </p>
            </div>
          </div>

          <div className="services-grid">
            {spreadsServices.map((data, index) => (
              <div key={index} className="service-card2">
                <div className="service-icon">{data.Icon}</div>
                <h4 className="service-title">{data.headText}</h4>
                <p className="service-description">{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="maximize-section">
        <div className="maximize-header">
          <h2 className="section-title text-center">
            Maximize efficiency with <br /> intelligent automation
          </h2>
          <p className="section-subtitle text-center">
            AMBISPINE TECHNOLOGIES invites you to join our vibrant digital
            community platform
          </p>
        </div>

        <div className="maximize-content">
          <div className="maximize-img-container">
            <img
              src={officediscussingImg}
              className="maximize-img"
              alt="Office Discussion"
            />
          </div>
          <div className="maximize-text-content">
            <h2 className="section-title">
              Elevate Your Business with Cloud Expertise
            </h2>
            <p className="section-description">
              AMBISPINE TECHNOLOGIES invites you to join our vibrant digital
              community platform, where you can connect, collaborate, and foster
              creativity and innovation. Join us to unlock endless possibilities
              and experience the magic of limitless potential!
            </p>
            <Link to="/product" className="learn-more-link">
              Learn More <FaLongArrowAltRight className="arrow-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
