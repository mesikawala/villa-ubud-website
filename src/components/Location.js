import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../data/villaData';

const Location = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl text-amber-900 text-center mb-12 sm:mb-16 font-light">
          Our Location
        </h3>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl text-amber-900 mb-2 font-medium">Address</h4>
                <p className="text-stone-600 leading-relaxed">
                  {contactInfo.address}<br />
                  {contactInfo.city}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl text-amber-900 mb-2 font-medium">Contact</h4>
                <p className="text-stone-600">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-green-700 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl text-amber-900 mb-2 font-medium">Email</h4>
                <p className="text-stone-600">{contactInfo.email}</p>
              </div>
            </div>
          </div>
          <div className="h-64 sm:h-96 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src={contactInfo.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Villa Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;