import React, { useState, useEffect } from "react";
import slide1 from "../../assets/carousel-1.jpeg";
import slide2 from "../../assets/carousel-2.jpg";
import slide3 from "../../assets/carousel-3.jpg";
import slide4 from "../../assets/carousel-4.jpg";
import "../styles/Carousel.css";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <img src={slide1} alt="Slide 1" className="carousel-image" />
        </div>
        <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
          <img src={slide2} alt="Slide 2" className="carousel-image" />
        </div>
        <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
          <img src={slide3} alt="Slide 3" className="carousel-image" />
        </div>
        <div className={`carousel-item ${index === 3 ? "active" : ""}`}>
          <img src={slide4} alt="Slide 4" className="carousel-image" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselComponent;
