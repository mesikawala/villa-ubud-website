import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { villaImages } from "../data/villaData";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % villaImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + villaImages.length) % villaImages.length
    );
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl text-amber-900 text-center mb-12 sm:mb-16 font-light">
          Gallery
        </h3>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-64 sm:h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={villaImages[currentImageIndex]}
              alt={`Villa ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 sm:p-3 rounded-full hover:bg-white transition shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-amber-900" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 sm:p-3 rounded-full hover:bg-white transition shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-900" />
          </button>
          <div className="flex justify-center mt-6 space-x-2">
            {villaImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
                  idx === currentImageIndex
                    ? "bg-green-700 scale-125"
                    : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
