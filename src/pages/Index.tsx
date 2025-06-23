
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wrench, Lightbulb, Zap, Mic, RefreshCw, Users, Download, Bluetooth } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const handleDownloadAPK = () => {
    toast({
      title: "Download Starting",
      description: "AL-BURAQ Smart Home app is being downloaded...",
    });
    console.log("APK download initiated");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />

      {/* Plug & Play Feature Highlight */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-y border-gray-800">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">🔌 Revolutionary Plug & Play Technology</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-900/80 p-4 md:p-6 rounded-xl border border-blue-500/50 hover:border-blue-500/80 transition-all hover:scale-105 animate-scale-in group duration-500">
                <Wrench className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">No Rewiring Needed</h3>
                <p className="text-gray-300 text-sm md:text-base">Simply place inside your existing switchboard - no destruction or rewiring required</p>
              </div>
              <div className="bg-gray-900/80 p-4 md:p-6 rounded-xl border border-cyan-500/50 hover:border-cyan-500/80 transition-all hover:scale-105 animate-scale-in delay-100 group duration-500">
                <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Old Switches Still Work</h3>
                <p className="text-gray-300 text-sm md:text-base">Your physical switches remain functional - control appliances both physically and virtually</p>
              </div>
              <div className="bg-gray-900/80 p-4 md:p-6 rounded-xl border border-emerald-500/50 hover:border-emerald-500/80 transition-all hover:scale-105 animate-scale-in delay-200 group duration-500">
                <Zap className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">Instant Smart Home</h3>
                <p className="text-gray-300 text-sm md:text-base">Transform your entire home into a smart home in minutes, not hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Products />

      {/* Voice Command Showcase */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 animate-fade-in">🎙️ Revolutionary Voice Control</h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-100">
            Unlike traditional voice assistants, create your own custom commands with any name you want. 
            Say <strong>"Jhanzaib turn on the fan"</strong> or <strong>"Sara switch off the lights"</strong> - the choice is yours!
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-900/80 p-6 md:p-8 rounded-xl border border-blue-500/50 hover:border-blue-500/80 transition-all hover:scale-105 animate-scale-in group duration-500">
              <Mic className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Custom Names</h3>
              <p className="text-gray-300 text-base md:text-lg">Use any name - your child's name, pet's name, or any word you prefer</p>
            </div>
            <div className="bg-gray-900/80 p-6 md:p-8 rounded-xl border border-cyan-500/50 hover:border-cyan-500/80 transition-all hover:scale-105 animate-scale-in delay-100 group duration-500">
              <RefreshCw className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Instant Response</h3>
              <p className="text-gray-300 text-base md:text-lg">Commands execute immediately without internet delays</p>
            </div>
            <div className="bg-gray-900/80 p-6 md:p-8 rounded-xl border border-emerald-500/50 hover:border-emerald-500/80 transition-all hover:scale-105 animate-scale-in delay-200 group duration-500">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">Family Commands</h3>
              <p className="text-gray-300 text-base md:text-lg">Each family member can set their own unique voice commands</p>
            </div>
          </div>
        </div>
      </section>

      <Videos />
      <Contact />

      {/* Download Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 animate-fade-in">📱 Download Our Revolutionary App</h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-100">
            Get the AL-BURAQ Smart Home app with custom voice control, family sharing, and real-time updates. 
            Control your home from anywhere in the world or use Bluetooth for local control up to 100 meters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="flex items-center space-x-2 md:space-x-3 text-blue-400 bg-gray-900/50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105">
              <Mic className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">Custom Voice Commands</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 text-cyan-400 bg-gray-900/50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">Family Sharing</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 text-emerald-400 bg-gray-900/50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 hover:scale-105">
              <Bluetooth className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">Bluetooth + WiFi</span>
            </div>
          </div>
          <Button 
            onClick={handleDownloadAPK}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 animate-scale-in duration-500"
          >
            <Download className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4" />
            Download APK Now - FREE
          </Button>
          <p className="text-base md:text-lg text-gray-400 mt-4 md:mt-6 animate-fade-in delay-300">
            ✅ Free download • ✅ Latest version • ✅ Android compatible • ✅ Voice control enabled
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
