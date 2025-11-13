import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { villaImages } from '../data/villaData';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play setiap 5 detik
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextImage();
    }, 5000); // 5 detik

    return () => clearInterval(interval);
  }, [currentImageIndex, isAutoPlay]);

  const nextImage = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % villaImages.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + villaImages.length) % villaImages.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToImage = (index) => {
    if (isAnimating || index === currentImageIndex) return;
    setDirection(index > currentImageIndex ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl text-amber-900 text-center mb-12 sm:mb-16 font-light">
          Gallery
        </h3>
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Container dengan Animasi */}
          <div className="relative h-64 sm:h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-stone-100">
            {villaImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentImageIndex
                    ? 'opacity-100 translate-x-0'
                    : direction === 'right'
                    ? index < currentImageIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                    : index > currentImageIndex
                    ? 'opacity-0 translate-x-full'
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                <img
                  src={image}
                  alt={`Villa ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {villaImages.length}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            disabled={isAnimating}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 sm:p-3 rounded-full hover:bg-white transition shadow-lg disabled:opacity-50 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-amber-900" />
          </button>
          
          <button
            onClick={nextImage}
            disabled={isAnimating}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 sm:p-3 rounded-full hover:bg-white transition shadow-lg disabled:opacity-50 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-900" />
          </button>

          {/* Auto-play Toggle Button */}
          <button
            onClick={toggleAutoPlay}
            className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-full hover:bg-white transition shadow-lg hover:scale-110"
            title={isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
          >
            {isAutoPlay ? (
              <Pause className="w-5 h-5 text-amber-900" />
            ) : (
              <Play className="w-5 h-5 text-amber-900" />
            )}
          </button>

          {/* Thumbnail Indicators */}
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {villaImages.map((image, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                disabled={isAnimating}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'w-16 h-16 sm:w-20 sm:h-20 ring-4 ring-green-700 scale-110' 
                    : 'w-12 h-12 sm:w-16 sm:h-16 opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Progress Bar (Auto-play indicator) */}
          {isAutoPlay && (
            <div className="mt-6 w-full bg-stone-200 h-1 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-700 transition-all"
                style={{
                  animation: 'progress 5s linear infinite',
                }}
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;