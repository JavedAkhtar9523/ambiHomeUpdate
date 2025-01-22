import "./HomeUpdateSecond.css";
import React, { useRef, useEffect, useState } from "react";
import ambiup from "../../images/ambiup.mp4";
import officediscussingImg from "../../assets/office-discussing.avif";
import empowerImg1 from "../../assets/empowerImg1.jpg";
import learnImg from "../../assets/learn.jpg";
import connectedImg from "../../assets/connect.avif";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiShareForwardFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
// import maximize from "./../../assets/maximize.jpg";
import maximize from "../../assets/maximize.jpg";

export default function HomeUpdateSecond() {
  const spreadsServices = [
    // {
    //   src: accessImg,
    //   alt: "Image 1",
    //   text: "Implies that a stronger network can provide valuable support and tools highlights the potential for new experiences and possibilities",
    //   headText: "Connect Learn Grow Your premier destination for professional growth and networking",
    // },
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
    <div>
      {/* <section className="home-hero" style={{ padding: "0px" }}>
        <div className="home-video-container">
          <video autoPlay loop muted className="home-background-video">
            <source src={ambiup} type="video/mp4"></source>
          </video>
        </div>
        <div className="home-hero-overlay">
          <div className="home-hero-content">
            <div className="home-hero-left">
              <h1 className="home-hero-title">
                Embracing The Future OF <br /> Technology
              </h1>
              <p className="home-hero-description" data-aos="fade-right">
                Join us to discover the latest advancements in cloud. Computing
                artificial intelligence, and data analytics and be part of the
                transformation.
              </p>

              <div className="home-cta-container">
                <button className="home-primary-btn">
                  <Link
                    to="/services/software-development-services"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Explore Technologies{" "}
                    <FaLongArrowAltRight className="home-explore_tech_icon" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
            <h2
              className="spread-section-titile"
              style={{ textAlign: "left" }}
              data-aos="fade-up"
            >
              Spread Your Wings, Expand Your Network
            </h2>
            <p className="spread-section-description" data-aos="fade-up">
              Expand your reach and influence. Grow your connections, increase
              your opportunities, and access to resources. Make a bond with new
              possibilities and horizons.
            </p>
            <Link
              to="/product"
              className="network-learn-more-link "
              data-aos="fade-up"
            >
              Learn More <FaLongArrowAltRight className="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="container ">
            <div className="spead-ser-top row ">
              <div className="col-md-6 col-12 pb-2">
                <h3 className="spead-ser-head">
                  Connect Learn Grow <br />
                  Your premier destination for professional growth and
                  networking
                </h3>
              </div>
              <div className="col-md-6 col-12">
                <p className="spead-ser-subtitle">
                  Implies that a stronger network can provide valuable support
                  and tools highlights the potential for new experiences and
                  possibilities
                </p>
              </div>
            </div>
            <div className="row mt-4">
              {spreadsServices.map((data, index) => {
                return (
                  <div key={index} className="col-md-4 col-12">
                    <h4 className="text-dark">{data.Icon}</h4>

                    <h4 className="spead-ser-head-text">{data.headText}</h4>
                    <p className="spead-ser-subtitle-text">{data.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="home-body-section">
        <div className="maximize-top-container">
          <h2 className="maximize-heading">
            {" "}
            Maximize effeciency with <br /> intelligent automation
          </h2>
          <p className="maximize-subtitle">
            AMBISPINE TECHNOLOGIES invites you to join our vibrant digital
            community platform
          </p>
        </div>
        <div className="maximize-mid-top">
          <div className="maximize-img-container">
            <img
              src={maximize}
              className="maximize-img"
              alt="Office Discussion"
            />
          </div>
          <div className="maximize-content-right">
            <h2
              className="spread-section-titile"
              style={{ textAlign: "left" }}
              data-aos="fade-up"
            >
              Elevate Your Business with Cloud Expertise
            </h2>
            <p className="spread-section-description" data-aos="fade-up">
              AMBISPINE TECHNOLOGIES invites you to join our vibrant digital
              community platform, where you can connect, collaborate, and foster
              creativity and innovation. Join us to unlock endless possibilities
              and experience the magic of limitless potential!
            </p>
            <div>
              <Link
                to="/product"
                className="network-learn-more-link "
                data-aos="fade-up"
              >
                Learn More <FaLongArrowAltRight className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
