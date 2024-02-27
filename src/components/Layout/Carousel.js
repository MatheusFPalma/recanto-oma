import React from 'react';
import './Carousel.module.css';

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-navigation">
        <button className="carousel-button prev">&#10094;</button>
      </div>
      <div className="carousel-slide">
        <img src="https://placehold.co/600x400" alt="Img" />
      </div>
      <div className="carousel-navigation">
        <button className="carousel-button next">&#10095;</button>
      </div>
    </div>
  );
}

export default Carousel;