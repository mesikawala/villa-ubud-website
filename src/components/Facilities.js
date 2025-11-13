import React from "react";
import { Wifi, Utensils, Droplets } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Free WiFi",
      desc: "High-speed internet",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Kolam Renang",
      desc: "Private infinity pool",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Sarapan Gratis",
      desc: "Daily breakfast included",
    },
  ];

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl text-amber-900 text-center mb-12 sm:mb-16 font-light">
          Villa Facilities
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-stone-50 p-8 rounded-xl text-center hover:shadow-lg transition group"
            >
              <div className="text-green-700 flex justify-center mb-4 group-hover:scale-110 transition">
                {facility.icon}
              </div>
              <h4 className="text-xl text-amber-900 mb-2 font-medium">
                {facility.title}
              </h4>
              <p className="text-stone-600">{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
