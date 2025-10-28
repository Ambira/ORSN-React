// src/components/Carousel.jsx
import React, { useEffect } from "react";
import { initCarousel } from "../assets/js/carousel";

import apros1 from "../assets/images/APORS.jpg";
import orsn6 from "../assets/images/orsn6.jpg";
import orsn3 from "../assets/images/orsn3.jpg";
import orsn4 from "../assets/images/orsn4.jpg";
import orsn5 from "../assets/images/orsn5.jpg";

export default function Carousel() {
  const slides = [apros1, orsn6, orsn3, orsn4, orsn5];

  useEffect(() => {
    initCarousel();
  }, []);

  return (
<div
  id="animation-carousel"
  className="relative w-full -mt-2"
  data-carousel="slide"
  style={{ backgroundColor: "#FFFFFF" }}
>

      
      {/* Carousel wrapper */}
      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`${idx === 0 ? "block" : "hidden"} duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 w-8 h-8 -translate-y-1/2 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center"
        data-carousel-prev
      >
        ‹
        <span className="sr-only">Previous</span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 w-8 h-8 -translate-y-1/2 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center"
        data-carousel-next
      >
        ›
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
