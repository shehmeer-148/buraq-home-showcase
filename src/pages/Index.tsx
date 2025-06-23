
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Wifi, Smartphone, Shield, Zap, Globe, Download, Play, Users, Mic, Sync, Bluetooth, Sliders, Clock, Mail, Phone, MessageCircle, Wrench, Lightbulb, Fan, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  const products = [
    {
      id: 1,
      name: "AL-BURAQ 8-Channel Smart Switch",
      price: "PKR 15,000",
      originalPrice: "PKR 18,750",
      discount: "20% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Control 8 different appliances simultaneously with our flagship smart home device. Perfect for complete home automation with voice control and family sharing.",
      features: ["8 Channel Control", "WiFi Enabled", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 2,
      name: "AL-BURAQ 4-Channel Smart Switch",
      price: "PKR 9,750",
      originalPrice: "PKR 11,938",
      discount: "19% OFF",
      image: "/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png",
      description: "Ideal for medium-sized rooms, control 4 appliances with ease. Great balance of functionality and affordability with advanced voice control.",
      features: ["4 Channel Control", "Bluetooth Control", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 3,
      name: "AL-BURAQ Single Smart Switch",
      price: "PKR 5,000",
      originalPrice: "PKR 6,250",
      discount: "20% OFF",
      image: "/lovable-uploads/0c770567-89d8-4a04-9d0c-cc654fd2663a.png",
      description: "Perfect starter device for single appliance control. Experience smart home automation at an affordable price with voice control.",
      features: ["Single Channel", "WiFi Enabled", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 4,
      name: "AL-BURAQ 5+1 Dimmer Control",
      price: "PKR 18,750",
      originalPrice: "PKR 22,500",
      discount: "17% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Advanced control with 5 on/off switches plus 1 dimmer unit. Control fan speed from 0-100% and manage multiple appliances with precision.",
      features: ["5 On/Off + 1 Dimmer", "Speed Control 0-100%", "Bluetooth Control", "Voice Commands", "Family Sharing", "Premium Features"]
    },
    {
      id: 5,
      name: "AL-BURAQ 2+1 Smart Control",
      price: "PKR 11,938",
      originalPrice: "PKR 14,175",
      discount: "16% OFF",
      image: "/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png",
      description: "Compact solution with 2 on/off switches and 1 dimmer control. Perfect for smaller spaces with fan speed control capabilities.",
      features: ["2 On/Off + 1 Dimmer", "Fan Speed Control", "WiFi Enabled", "Voice Commands", "Family Sharing", "Compact Design"]
    },
    {
      id: 6,
      name: "AL-BURAQ Heavy Duty 25A",
      price: "PKR 22,500",
      originalPrice: "PKR 26,250",
      discount: "14% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Industrial-grade smart switch supporting up to 25 amps. Perfect for AC units, water heaters, and heavy electrical appliances.",
      features: ["25A Heavy Load", "AC Compatible", "Industrial Grade", "Voice Commands", "Family Sharing", "Premium Build"]
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share app access with family members so everyone can control appliances. Real-time sync keeps everyone updated instantly.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mic,
      title: "Custom Voice Commands",
      description: "Create personalized voice commands like 'Jhanzaib turn on the fan'. No need to say 'Alexa' or 'Siri' - use any name you want!",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Sync,
      title: "Real-time Updates",
      description: "See which appliances are running in real-time. App syncs instantly with device and all family members simultaneously.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Bluetooth,
      title: "Bluetooth Control",
      description: "Local control via Bluetooth with range up to 100 meters - no internet needed for nearby device operation.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Wifi,
      title: "WiFi Connectivity",
      description: "Connect your devices to WiFi for remote control from anywhere in the world through internet connection.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Fan,
      title: "Dimmer & Speed Control",
      description: "Control fan speed from 0-100% with our advanced dimmer units. Perfect speed control for ultimate comfort.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Wrench,
      title: "Plug & Play Installation",
      description: "No need to replace your old switchboard! Just place inside your existing board - your old switches still work physically.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const installationVideos = [
    {
      title: "Device Installation Guide",
      description: "Step-by-step installation of AL-BURAQ smart switches in your existing switchboard",
      icon: Wrench,
      color: "from-green-500 to-emerald-600",
      videoUrl: "https://www.youtube.com/embed/your-installation-video-id"
    },
    {
      title: "App Setup & Configuration",
      description: "Complete guide to setup the mobile app and connect to your devices",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-600",
      videoUrl: "https://www.youtube.com/embed/your-app-setup-video-id"
    },
    {
      title: "Voice Commands Setup",
      description: "Learn how to create custom voice commands with any name you prefer",
      icon: Mic,
      color: "from-purple-500 to-pink-600",
      videoUrl: "https://www.youtube.com/embed/your-voice-commands-video-id"
    },
    {
      title: "Family Sharing Tutorial",
      description: "How to share device control with family members and sync real-time updates",
      icon: Users,
      color: "from-orange-500 to-red-600",
      videoUrl: "https://www.youtube.com/embed/your-family-sharing-video-id"
    }
  ];

  const handleDownloadAPK = () => {
    toast({
      title: "Download Starting",
      description: "AL-BURAQ Smart Home app is being downloaded...",
    });
    console.log("APK download initiated");
  };

  const handleWatchVideo = (video: any) => {
    setCurrentVideoUrl(video.videoUrl);
    setCurrentVideoTitle(video.title);
    setVideoModalOpen(true);
    toast({
      title: "Opening Video",
      description: `Opening ${video.title} guide...`,
    });
  };

  const handleContact = (type: string) => {
    if (type === 'email') {
      window.location.href = 'mailto:info.alburaqsmarthome@gmail.com';
    } else if (type === 'whatsapp') {
      window.open('https://wa.me/923054248536', '_blank');
    } else if (type === 'call') {
      window.location.href = 'tel:+923054248536';
    }
    toast({
      title: "Contact Info",
      description: `Opening ${type} contact...`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/470ce12b-86c0-41eb-b524-10cb307488fc.png" 
                  alt="AL-BURAQ Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-white">AL-BURAQ</span>
                <p className="text-xs md:text-sm text-blue-300">Smart Home Automation</p>
              </div>
            </div>
            <div className="flex space-x-2 md:space-x-3">
              <Button 
                onClick={() => handleContact('whatsapp')}
                variant="outline"
                size="sm"
                className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20 text-xs md:text-sm"
              >
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
              <Button 
                onClick={handleDownloadAPK}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg text-xs md:text-sm"
              >
                <Download className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Download</span>
                <span className="sm:hidden">App</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in">
            AL-BURAQ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-pulse">
              Smart Home Revolution
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Transform your home into a smart paradise with our revolutionary plug & play technology. 
            Control appliances with custom voice commands, share with family, and enjoy real-time updates 
            from anywhere in the world - no rewiring needed!
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/40 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in">
              <Wrench className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
              <span className="text-blue-200 font-medium text-sm md:text-base">🔌 Plug & Play - No Rewiring</span>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/40 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in">
              <Mic className="w-4 h-4 md:w-5 md:h-5 text-green-300" />
              <span className="text-green-200 font-medium text-sm md:text-base">🎙️ Custom Voice Commands</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/40 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-300" />
              <span className="text-purple-200 font-medium text-sm md:text-base">👥 Family Sharing</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/40 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in">
              <Wifi className="w-4 h-4 md:w-5 md:h-5 text-cyan-300" />
              <span className="text-cyan-200 font-medium text-sm md:text-base">📡 WiFi Control</span>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/40 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3 animate-scale-in">
              <Bluetooth className="w-4 h-4 md:w-5 md:h-5 text-orange-300" />
              <span className="text-orange-200 font-medium text-sm md:text-base">📱 Bluetooth Control</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plug & Play Feature Highlight */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-y border-gray-700">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">🔌 Revolutionary Plug & Play Technology</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-800/60 p-4 md:p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-105 animate-scale-in">
                <Wrench className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">No Rewiring Needed</h3>
                <p className="text-gray-300 text-sm md:text-base">Simply place inside your existing switchboard - no destruction or rewiring required</p>
              </div>
              <div className="bg-gray-800/60 p-4 md:p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:scale-105 animate-scale-in">
                <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Old Switches Still Work</h3>
                <p className="text-gray-300 text-sm md:text-base">Your physical switches remain functional - control appliances both physically and virtually</p>
              </div>
              <div className="bg-gray-800/60 p-4 md:p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all hover:scale-105 animate-scale-in">
                <Zap className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Instant Smart Home</h3>
                <p className="text-gray-300 text-sm md:text-base">Transform your entire home into a smart home in minutes, not hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-800/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">🚀 Revolutionary Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-600 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in">
                <CardHeader>
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl md:text-2xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">💡 Our Smart Devices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="bg-gray-800/50 border-gray-600 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-scale-in">
                <CardHeader>
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 md:h-56 object-cover rounded-xl mb-4 shadow-lg"
                    />
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white px-2 md:px-3 py-1 text-xs md:text-sm font-bold">
                      {product.discount}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg md:text-xl mb-2">{product.name}</CardTitle>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl md:text-3xl font-bold text-blue-400">{product.price}</span>
                    <span className="text-base md:text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2 mb-4 md:mb-6">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-blue-500/40 text-blue-300 py-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-2 md:py-3 text-base md:text-lg font-semibold">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Command Showcase */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 animate-fade-in">🎙️ Revolutionary Voice Control</h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Unlike traditional voice assistants, create your own custom commands with any name you want. 
            Say <strong>"Jhanzaib turn on the fan"</strong> or <strong>"Sara switch off the lights"</strong> - the choice is yours!
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-105 animate-scale-in">
              <Mic className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Custom Names</h3>
              <p className="text-gray-300 text-base md:text-lg">Use any name - your child's name, pet's name, or any word you prefer</p>
            </div>
            <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:scale-105 animate-scale-in">
              <Sync className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Instant Response</h3>
              <p className="text-gray-300 text-base md:text-lg">Commands execute immediately without internet delays</p>
            </div>
            <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all hover:scale-105 animate-scale-in">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Family Commands</h3>
              <p className="text-gray-300 text-base md:text-lg">Each family member can set their own unique voice commands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Videos Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">📹 Complete Installation Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationVideos.map((video, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-600 hover:border-blue-500/60 transition-all hover:scale-105 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-base md:text-lg">
                    <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-400" />
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm md:text-base">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`bg-gradient-to-r ${video.color} h-24 md:h-32 rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-105 transition-transform`}>
                    <video.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                  <Button 
                    onClick={() => handleWatchVideo(video)}
                    className={`w-full bg-gradient-to-r ${video.color} hover:opacity-90 text-white text-sm md:text-base`}
                  >
                    Watch Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-gray-800/50 to-blue-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">📞 Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Card className="bg-gray-800/50 border-gray-600 hover:border-blue-500/60 transition-all hover:scale-105 animate-scale-in">
                <CardHeader className="text-center">
                  <Mail className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-lg md:text-xl">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-4 text-sm md:text-base">Get detailed information about our products</p>
                  <Button 
                    onClick={() => handleContact('email')}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 w-full text-xs md:text-sm break-all"
                  >
                    info.alburaqsmarthome@gmail.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-600 hover:border-green-500/60 transition-all hover:scale-105 animate-scale-in">
                <CardHeader className="text-center">
                  <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-lg md:text-xl">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-4 text-sm md:text-base">Quick support and instant responses</p>
                  <Button 
                    onClick={() => handleContact('whatsapp')}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 w-full text-sm md:text-base"
                  >
                    +92 305 4248536
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-600 hover:border-blue-500/60 transition-all hover:scale-105 animate-scale-in">
                <CardHeader className="text-center">
                  <Phone className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-lg md:text-xl">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-4 text-sm md:text-base">Direct phone support for urgent queries</p>
                  <Button 
                    onClick={() => handleContact('call')}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 w-full text-sm md:text-base"
                  >
                    +92 305 4248536
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 animate-fade-in">📱 Download Our Revolutionary App</h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Get the AL-BURAQ Smart Home app with custom voice control, family sharing, and real-time updates. 
            Control your home from anywhere in the world or use Bluetooth for local control up to 100 meters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="flex items-center space-x-2 md:space-x-3 text-blue-300 bg-gray-800/30 px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Mic className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">Custom Voice Commands</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 text-cyan-300 bg-gray-800/30 px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">Family Sharing</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 text-emerald-300 bg-gray-800/30 px-4 md:px-6 py-2 md:py-3 rounded-full">
              <Bluetooth className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg">Bluetooth + WiFi</span>
            </div>
          </div>
          <Button 
            onClick={handleDownloadAPK}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 animate-scale-in"
          >
            <Download className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4" />
            Download APK Now - FREE
          </Button>
          <p className="text-base md:text-lg text-gray-400 mt-4 md:mt-6">
            ✅ Free download • ✅ Latest version • ✅ Android compatible • ✅ Voice control enabled
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/60 py-12 md:py-16 px-4 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
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
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            🔌 Plug & Play Installation • 🎙️ Custom Voice Control • 👥 Family Sharing • 📡 WiFi & Bluetooth • ⚡ Up to 25A Support
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:info.alburaqsmarthome@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://wa.me/923054248536" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="tel:+923054248536" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-xs md:text-sm break-all">
            © 2024 AL-BURAQ Smart Home Automation. All rights reserved. | Email: info.alburaqsmarthome@gmail.com | Phone: +92 305 4248536
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 max-w-4xl w-full h-[80vh] p-0">
          <DialogHeader className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white text-lg md:text-xl">{currentVideoTitle}</DialogTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <DialogDescription className="text-gray-400">
              Watch the complete guide to get started with AL-BURAQ smart devices
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 p-4">
            {currentVideoUrl && (
              <iframe
                src={currentVideoUrl}
                className="w-full h-full rounded-lg"
                allowFullScreen
                title={currentVideoTitle}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
