import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
              alt="Villa Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl text-amber-900 font-light">
              A Sanctuary of Serenity
            </h3>
            <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
              Villa Ubud Paradise adalah perpaduan sempurna antara kemewahan
              modern dan kehangatan tradisional Bali. Terletak di jantung Ubud,
              villa kami menawarkan pemandangan sawah yang menakjubkan dan
              privasi maksimal untuk liburan Anda.
            </p>
            <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
              Setiap detail dirancang dengan cermat untuk memberikan pengalaman
              menginap yang tak terlupakan. Dari desain interior yang elegan
              hingga fasilitas kelas dunia, kami memastikan setiap momen Anda
              istimewa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
