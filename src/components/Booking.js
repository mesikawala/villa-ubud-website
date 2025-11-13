import React, { useState } from "react";
import { contactInfo } from "../data/villaData";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

  const handleBooking = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert("Mohon isi tanggal check-in dan check-out");
      return;
    }
    const message = `Halo, saya ingin booking villa:\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nJumlah tamu: ${bookingData.guests}`;
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section id="booking" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl text-amber-900 text-center mb-8 sm:mb-12 font-light">
          Book Your Stay
        </h3>
        <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-amber-900 mb-2 font-medium">
                Check-in
              </label>
              <input
                type="date"
                value={bookingData.checkIn}
                onChange={(e) =>
                  setBookingData({ ...bookingData, checkIn: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-700/20 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-amber-900 mb-2 font-medium">
                Check-out
              </label>
              <input
                type="date"
                value={bookingData.checkOut}
                onChange={(e) =>
                  setBookingData({ ...bookingData, checkOut: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-700/20 outline-none transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-amber-900 mb-2 font-medium">
              Jumlah Tamu
            </label>
            <select
              value={bookingData.guests}
              onChange={(e) =>
                setBookingData({ ...bookingData, guests: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-700/20 outline-none transition"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleBooking}
            className="w-full bg-green-700 text-white py-4 rounded-lg hover:bg-green-800 transition text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Book via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
