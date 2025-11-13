import React from 'react';
import { Phone } from 'lucide-react';
import { contactInfo } from '../data/villaData';

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all z-50 hover:scale-110"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;