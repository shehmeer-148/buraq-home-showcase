
import { Wrench, Mic, Users, Wifi, Bluetooth } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl animate-pulse"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in">
          AL-BURAQ
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-pulse">
            Smart Home Revolution
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          Transform your home into a smart paradise with our revolutionary plug & play technology. 
          Control appliances with custom voice commands, share with family, and enjoy real-time updates 
          from anywhere in the world - no rewiring needed!
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm border border-blue-500/60 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in hover:scale-105 transition-all duration-300">
            <Wrench className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm md:text-base">🔌 Plug & Play - No Rewiring</span>
          </div>
          <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-sm border border-green-500/60 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in delay-100 hover:scale-105 transition-all duration-300">
            <Mic className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            <span className="text-green-300 font-medium text-sm md:text-base">🎙️ Custom Voice Commands</span>
          </div>
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-purple-500/60 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in delay-200 hover:scale-105 transition-all duration-300">
            <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            <span className="text-purple-300 font-medium text-sm md:text-base">👥 Family Sharing</span>
          </div>
          <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm border border-cyan-500/60 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in delay-300 hover:scale-105 transition-all duration-300">
            <Wifi className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium text-sm md:text-base">📡 WiFi Control</span>
          </div>
          <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm border border-orange-500/60 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in delay-400 hover:scale-105 transition-all duration-300">
            <Bluetooth className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
            <span className="text-orange-300 font-medium text-sm md:text-base">📱 Bluetooth Control</span>
          </div>
        </div>

        {/* App UI Showcase */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 p-4 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-105 animate-scale-in">
            <img 
              src="/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png" 
              alt="AL-BURAQ App Home Screen" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <p className="text-blue-400 text-sm mt-3 font-medium">📱 Home Control Dashboard</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:scale-105 animate-scale-in delay-200">
            <img 
              src="/lovable-uploads/0c770567-89d8-4a04-9d0c-cc654fd2663a.png" 
              alt="AL-BURAQ Room Control Interface" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <p className="text-cyan-400 text-sm mt-3 font-medium">🏠 Room Light Control</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
