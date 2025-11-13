import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="font-serif bg-stone-50">
      <WhatsAppButton />
      <Navigation />
      <Hero />
      <Facilities />
      <About />
      <Gallery />
      <Reviews />
      <Booking />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
