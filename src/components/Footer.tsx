
import { Mail, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/95 py-12 md:py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6 animate-fade-in">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
            <img 
              src="/lovable-uploads/470ce12b-86c0-41eb-b524-10cb307488fc.png" 
              alt="AL-BURAQ Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-bold text-white">AL-BURAQ Smart Home Automation</span>
          </div>
        </div>
        <p className="text-gray-400 mb-6 text-base md:text-lg animate-fade-in delay-100">
          🔌 Plug & Play Installation • 🎙️ Custom Voice Control • 👥 Family Sharing • 📡 WiFi & Bluetooth • ⚡ Up to 25A Support
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:info.alburaqsmarthome@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform">
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://wa.me/923054248536" target="_blank" className="text-green-400 hover:text-green-300 transition-colors duration-300 hover:scale-110 transform">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="tel:+923054248536" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110 transform">
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
        <p className="text-gray-500 text-xs md:text-sm break-words animate-fade-in delay-200">
          © 2024 AL-BURAQ Smart Home Automation. All rights reserved. | Email: info.alburaqsmarthome@gmail.com | Phone: +92 305 4248536
        </p>
      </div>
    </footer>
  );
};

export default Footer;
