import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./newscarousel.css";
import carouselHome1 from "../../assets/cloud22 (8).jpg";
import carouselHome2 from "../../assets/cloud22 (7).jpg";
import carouselHome3 from "../../assets/cloud22 (6).jpg";
import carouselHome4 from "../../assets/cloud22 (2).jpg";

const NewsCarousel = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const data = {
    news: [
      {
        title: "Witness the industry 4.0",
        description:
          "Feel the combination of digitalization, automation and data exchange.",
        image: carouselHome1,
      },
      {
        title: "Infrastructure & Data migration",
        description:
          "Improve infrastructure reliability, scalability, and performance.",
        image: carouselHome2,
      },
      {
        title: "Cloud services",
        description:
          "The key to success: reliable, secure & scalable cloud services.",
        image: carouselHome3,
      },
      {
        title: "AI & automation",
        description:
          "Welcome to a new era of productivity and human ingenuity.",
        image: carouselHome4,
      },
      {
        title: "Digital Transformation",
        description:
          "Transform your business with cutting-edge digital solutions.",
        image: carouselHome3,
      },
      {
        title: "Cybersecurity Solutions",
        description: "Protect your assets with advanced security measures.",
        image: carouselHome2,
      },
      {
        title: "IoT Integration",
        description: "Connect and control your devices seamlessly.",
        image: carouselHome4,
      },
    ],
    product: [
      {
        title: "Product Feature 1",
        description: "Innovative solutions for modern enterprises.",
        image: carouselHome3,
      },
      {
        title: "Product Feature 2",
        description: "Streamlined productivity and performance.",
        image: carouselHome2,
      },
      {
        title: "Product Feature 3",
        description: "Enhanced security and reliability.",
        image: carouselHome3,
      },
      {
        title: "Product Feature 4",
        description: "Seamless integration capabilities.",
        image: carouselHome4,
      },
      {
        title: "Product Feature 5",
        description: "Advanced analytics and reporting.",
        image: carouselHome1,
      },
      {
        title: "Product Feature 6",
        description: "Customizable workflow solutions.",
        image: carouselHome2,
      },
    ],
  };

  const handleSlide = (direction) => {
    const container = containerRef.current;
    const cards = container.getElementsByClassName("card");
    const cardWidth = cards[0].offsetWidth + 24; // Including margin

    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      container.style.transform = `translateX(-${
        (currentIndex - 1) * cardWidth
      }px)`;
    } else if (
      direction === "right" &&
      currentIndex < data[activeTab].length - 1
    ) {
      setCurrentIndex((prev) => prev + 1);
      container.style.transform = `translateX(-${
        (currentIndex + 1) * cardWidth
      }px)`;
    }
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">News and Insights</h1>

      <div className="tab-buttons">
        {["news", "product"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentIndex(0);
              if (containerRef.current) {
                containerRef.current.style.transform = "translateX(0)";
              }
            }}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        <div ref={containerRef} className="card-container">
          {data[activeTab].map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title" style={{ color: "white" }}>
                  {item.title}
                </h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button
            onClick={() => handleSlide("left")}
            disabled={currentIndex === 0}
            className={`nav-button ${currentIndex === 0 ? "disabled" : ""}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleSlide("right")}
            disabled={currentIndex === data[activeTab].length - 1}
            className={`nav-button ${
              currentIndex === data[activeTab].length - 1 ? "disabled" : ""
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;

// import React, { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const NewsCarousel = () => {
//   const [activeTab, setActiveTab] = useState("news");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const data = {
//     news: [
//       {
//         title: "Witness the industry 4.0",
//         description:
//           "Feel the combination of digitalization, automation and data exchange.",
//         image: "/api/placeholder/400/250",
//       },
//       {
//         title: "Infrastructure & Data migration",
//         description:
//           "Improve infrastructure reliability, scalability, and performance.",
//         image: "/api/placeholder/400/250",
//       },
//       {
//         title: "Cloud services",
//         description:
//           "The key to success: reliable, secure & scalable cloud services.",
//         image: "/api/placeholder/400/250",
//       },
//       {
//         title: "AI & automation",
//         description:
//           "Welcome to a new era of productivity and human ingenuity.",
//         image: "/api/placeholder/400/250",
//   },
//   {
//     title: "Digital Transformation",
//     description:
//       "Transform your business with cutting-edge digital solutions.",
//     image: "/api/placeholder/400/250",
//   },
//   {
//     title: "Cybersecurity Solutions",
//     description: "Protect your assets with advanced security measures.",
//     image: "/api/placeholder/400/250",
//   },
//   {
//     title: "IoT Integration",
//     description: "Connect and control your devices seamlessly.",
//     image: "/api/placeholder/400/250",
//   },
//       {
//         title: "Big Data Analytics",
//         description: "Make data-driven decisions with powerful analytics.",
//         image: "/api/placeholder/400/250",
//       },
//     ],
//     product: [
//       {
//         title: "Product Feature 1",
//         description: "Innovative solutions for modern enterprises.",
//         image: "/api/placeholder/400/250",
//       },
//       {
//         title: "Product Feature 2",
//         description: "Streamlined productivity and performance.",
//         image: "/api/placeholder/400/250",
//       },
//   {
//     title: "Product Feature 3",
//     description: "Enhanced security and reliability.",
//     image: "/api/placeholder/400/250",
//   },
//   {
//     title: "Product Feature 4",
//     description: "Seamless integration capabilities.",
//     image: "/api/placeholder/400/250",
//   },
//   {
//     title: "Product Feature 5",
//     description: "Advanced analytics and reporting.",
//     image: "/api/placeholder/400/250",
//   },
//   {
//     title: "Product Feature 6",
//     description: "Customizable workflow solutions.",
//     image: "/api/placeholder/400/250",
//   },
//     ],
//   };

//   const handleSlide = (direction) => {
//     const container = containerRef.current;
//     const cardWidth = container.offsetWidth / 4; // Width of one card including gap
//     const maxIndex = data[activeTab].length - 4; // Maximum index considering 4 cards view

//     if (direction === "left" && currentIndex > 0) {
//       const newIndex = Math.max(0, currentIndex - 1);
//       setCurrentIndex(newIndex);
//       container.style.transform = `translateX(-${newIndex * cardWidth}px)`;
//     } else if (direction === "right" && currentIndex < maxIndex) {
//       const newIndex = Math.min(maxIndex, currentIndex + 1);
//       setCurrentIndex(newIndex);
//       container.style.transform = `translateX(-${newIndex * cardWidth}px)`;
//     }
//   };

//   return (
//     <div className="carousel-container">
//       <h1 className="carousel-title">News and Insights</h1>

//       <div className="tab-buttons">
//         {["news", "product"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => {
//               setActiveTab(tab);
//               setCurrentIndex(0);
//               if (containerRef.current) {
//                 containerRef.current.style.transform = "translateX(0)";
//               }
//             }}
//             className={`tab-button ${activeTab === tab ? "active" : ""}`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="carousel-wrapper">
//         <div ref={containerRef} className="card-container">
//           {data[activeTab].map((item, index) => (
//             <div key={index} className="card">
//               <img src={item.image} alt={item.title} className="card-image" />
//               <div className="card-content">
//                 <h3 className="card-title">{item.title}</h3>
//                 <p className="card-description">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="navigation-buttons">
//           <button
//             onClick={() => handleSlide("left")}
//             disabled={currentIndex === 0}
//             className={`nav-button ${currentIndex === 0 ? "disabled" : ""}`}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={() => handleSlide("right")}
//             disabled={currentIndex >= data[activeTab].length - 4}
//             className={`nav-button ${
//               currentIndex >= data[activeTab].length - 4 ? "disabled" : ""
//             }`}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCarousel;
