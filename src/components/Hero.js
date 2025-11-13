import React from "react";
import { villaImages } from "../data/villaData";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-stone-100 to-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-amber-900 font-light leading-tight">
              Your Private Paradise
              <br />
              in the Heart of Ubud
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed">
              Nikmati ketenangan dan kemewahan di villa eksklusif kami yang
              dikelilingi oleh keindahan alam Ubud yang memukau.
            </p>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition text-lg shadow-lg hover:shadow-xl"
            >
              Book Your Stay
            </button>
          </div>
          <div className="relative h-64 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={villaImages[0]}
              alt="Villa Ubud"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
