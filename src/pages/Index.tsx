import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Smartphone, Shield, Zap, Globe, Download, Play, Users, Mic, Volume2, Bluetooth, Sliders, Clock, Mail, Phone, MessageCircle, Wrench, Lightbulb, Fan } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 1,
      name: "AL-BURAQ 8-Channel Smart Switch",
      price: "$199",
      originalPrice: "$249",
      discount: "20% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Control 8 different appliances simultaneously with our flagship smart home device. Perfect for complete home automation with voice control and family sharing.",
      features: ["8 Channel Control", "WiFi + Bluetooth", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 2,
      name: "AL-BURAQ 4-Channel Smart Switch",
      price: "$129",
      originalPrice: "$159",
      discount: "19% OFF",
      image: "/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png",
      description: "Ideal for medium-sized rooms, control 4 appliances with ease. Great balance of functionality and affordability with advanced voice control.",
      features: ["4 Channel Control", "WiFi + Bluetooth", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 3,
      name: "AL-BURAQ Single Smart Switch",
      price: "$79",
      originalPrice: "$99",
      discount: "20% OFF",
      image: "/lovable-uploads/0c770567-89d8-4a04-9d0c-cc654fd2663a.png",
      description: "Perfect starter device for single appliance control. Experience smart home automation at an affordable price with voice control.",
      features: ["Single Channel", "WiFi + Bluetooth", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 4,
      name: "AL-BURAQ 5+1 Dimmer Control",
      price: "$249",
      originalPrice: "$299",
      discount: "17% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Advanced control with 5 on/off switches plus 1 dimmer unit. Control fan speed from 0-100% and manage multiple appliances with precision.",
      features: ["5 On/Off + 1 Dimmer", "Speed Control 0-100%", "WiFi + Bluetooth", "Voice Commands", "Family Sharing", "Premium Features"]
    },
    {
      id: 5,
      name: "AL-BURAQ 2+1 Smart Control",
      price: "$159",
      originalPrice: "$189",
      discount: "16% OFF",
      image: "/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png",
      description: "Compact solution with 2 on/off switches and 1 dimmer control. Perfect for smaller spaces with fan speed control capabilities.",
      features: ["2 On/Off + 1 Dimmer", "Fan Speed Control", "WiFi + Bluetooth", "Voice Commands", "Family Sharing", "Compact Design"]
    },
    {
      id: 6,
      name: "AL-BURAQ Heavy Duty 25A",
      price: "$299",
      originalPrice: "$349",
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
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Volume2,
      title: "Real-time Updates",
      description: "See which appliances are running in real-time. App syncs instantly with device and all family members simultaneously.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Bluetooth,
      title: "Bluetooth + WiFi Dual Mode",
      description: "Works with both WiFi and Bluetooth. Bluetooth range up to 100 meters - no internet needed for local control.",
      color: "from-orange-500 to-red-600"
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
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "App Setup & Configuration",
      description: "Complete guide to setup the mobile app and connect to your devices",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Voice Commands Setup",
      description: "Learn how to create custom voice commands with any name you prefer",
      icon: Mic,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Family Sharing Tutorial",
      description: "How to share device control with family members and sync real-time updates",
      icon: Users,
      color: "from-orange-500 to-red-600"
    }
  ];

  const handleDownloadAPK = () => {
    toast({
      title: "Download Starting",
      description: "AL-BURAQ Smart Home app is being downloaded...",
    });
    console.log("APK download initiated");
  };

  const handleWatchVideo = (type: string) => {
    toast({
      title: "Opening Video",
      description: `Opening ${type} guide...`,
    });
    console.log(`Opening ${type} video`);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">AL-BURAQ</span>
                <p className="text-sm text-purple-300">Smart Home Automation</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={() => handleContact('whatsapp')}
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={handleDownloadAPK}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            AL-BURAQ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
              Smart Home Revolution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your home into a smart paradise with our revolutionary plug & play technology. 
            Control appliances with custom voice commands, share with family, and enjoy real-time updates 
            from anywhere in the world - no rewiring needed!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
              <Wrench className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200 font-medium">🔌 Plug & Play - No Rewiring</span>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-sm border border-pink-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
              <Mic className="w-5 h-5 text-pink-300" />
              <span className="text-pink-200 font-medium">🎙️ Custom Voice Commands</span>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
              <Users className="w-5 h-5 text-blue-300" />
              <span className="text-blue-200 font-medium">👥 Family Sharing</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
              <Wifi className="w-5 h-5 text-cyan-300" />
              <span className="text-cyan-200 font-medium">📡 WiFi + Bluetooth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plug & Play Feature Highlight */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-y border-purple-500/20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">🔌 Revolutionary Plug & Play Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/40 p-6 rounded-xl border border-purple-500/30">
                <Wrench className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Rewiring Needed</h3>
                <p className="text-gray-300">Simply place inside your existing switchboard - no destruction or rewiring required</p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-pink-500/30">
                <Lightbulb className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Old Switches Still Work</h3>
                <p className="text-gray-300">Your physical switches remain functional - control appliances both physically and virtually</p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-cyan-500/30">
                <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Instant Smart Home</h3>
                <p className="text-gray-300">Transform your entire home into a smart home in minutes, not hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">🚀 Revolutionary Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/50 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">💡 Our Smart Devices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="bg-black/50 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 object-cover rounded-xl mb-4 shadow-lg"
                    />
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                      {product.discount}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{product.name}</CardTitle>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-3xl font-bold text-purple-400">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-purple-500/40 text-purple-300 py-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 text-lg font-semibold">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Command Showcase */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">🎙️ Revolutionary Voice Control</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unlike traditional voice assistants, create your own custom commands with any name you want. 
            Say <strong>"Jhanzaib turn on the fan"</strong> or <strong>"Sara switch off the lights"</strong> - the choice is yours!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <Mic className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Custom Names</h3>
              <p className="text-gray-300 text-lg">Use any name - your child's name, pet's name, or any word you prefer</p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <Volume2 className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Instant Response</h3>
              <p className="text-gray-300 text-lg">Commands execute immediately without internet delays</p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all">
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Family Commands</h3>
              <p className="text-gray-300 text-lg">Each family member can set their own unique voice commands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Videos Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">📹 Complete Installation Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationVideos.map((video, index) => (
              <Card key={index} className="bg-black/50 border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-lg">
                    <Play className="w-5 h-5 mr-2 text-purple-400" />
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`bg-gradient-to-r ${video.color} h-32 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <video.icon className="w-12 h-12 text-white" />
                  </div>
                  <Button 
                    onClick={() => handleWatchVideo(video.title)}
                    className={`w-full bg-gradient-to-r ${video.color} hover:opacity-90 text-white`}
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
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">📞 Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/50 border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105">
                <CardHeader className="text-center">
                  <Mail className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-4">Get detailed information about our products</p>
                  <Button 
                    onClick={() => handleContact('email')}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 w-full"
                  >
                    info.alburaqsmarthome@gmail.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-green-500/30 hover:border-green-500/60 transition-all hover:scale-105">
                <CardHeader className="text-center">
                  <MessageCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-4">Quick support and instant responses</p>
                  <Button 
                    onClick={() => handleContact('whatsapp')}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 w-full"
                  >
                    +92 305 4248536
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-105">
                <CardHeader className="text-center">
                  <Phone className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-4">Direct phone support for urgent queries</p>
                  <Button 
                    onClick={() => handleContact('call')}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 w-full"
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">📱 Download Our Revolutionary App</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get the AL-BURAQ Smart Home app with custom voice control, family sharing, and real-time updates. 
            Control your home from anywhere in the world or use Bluetooth for local control up to 100 meters.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-3 text-purple-300 bg-black/30 px-6 py-3 rounded-full">
              <Mic className="w-6 h-6" />
              <span className="text-lg">Custom Voice Commands</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-300 bg-black/30 px-6 py-3 rounded-full">
              <Users className="w-6 h-6" />
              <span className="text-lg">Family Sharing</span>
            </div>
            <div className="flex items-center space-x-3 text-pink-300 bg-black/30 px-6 py-3 rounded-full">
              <Bluetooth className="w-6 h-6" />
              <span className="text-lg">Bluetooth + WiFi</span>
            </div>
          </div>
          <Button 
            onClick={handleDownloadAPK}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            <Download className="w-8 h-8 mr-4" />
            Download APK Now - FREE
          </Button>
          <p className="text-lg text-gray-400 mt-6">
            ✅ Free download • ✅ Latest version • ✅ Android compatible • ✅ Voice control enabled
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 py-16 px-4 border-t border-purple-500/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">AL-BURAQ Smart Home Automation</span>
            </div>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            🔌 Plug & Play Installation • 🎙️ Custom Voice Control • 👥 Family Sharing • 📡 WiFi & Bluetooth • ⚡ Up to 25A Support
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:info.alburaqsmarthome@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://wa.me/923054248536" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="tel:+923054248536" className="text-blue-400 hover:text-blue-300 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 AL-BURAQ Smart Home Automation. All rights reserved. | Email: info.alburaqsmarthome@gmail.com | Phone: +92 305 4248536
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
