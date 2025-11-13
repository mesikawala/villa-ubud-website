import React from "react";
import { Star } from "lucide-react";
import { reviews } from "../data/villaData";

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl text-amber-900 text-center mb-12 sm:mb-16 font-light">
          Guest Reviews
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <p className="text-stone-600 mb-4 leading-relaxed text-sm sm:text-base">
                "{review.text}"
              </p>
              <div className="border-t pt-4">
                <p className="text-amber-900 font-medium">{review.name}</p>
                <p className="text-stone-500 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
