
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Smartphone, Shield, Zap, Globe, Download, Play, Users, Mic, Volume2, Bluetooth, Sliders, Clock } from "lucide-react";
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
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share app access with family members so everyone can control appliances. Real-time sync keeps everyone updated.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Mic,
      title: "Custom Voice Commands",
      description: "Create personalized voice commands like 'Jhanzaib turn on the fan'. No need to say 'Alexa' or 'Siri' - use any name you want!",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Volume2,
      title: "Real-time Updates",
      description: "See which appliances are running in real-time. App syncs instantly with device and all family members.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Bluetooth,
      title: "Bluetooth + WiFi",
      description: "Works with both WiFi and Bluetooth. Bluetooth range up to 100 meters - no internet needed for local control.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Sliders,
      title: "Dimmer Control",
      description: "Control fan speed from 0-100% with our advanced dimmer units. Perfect speed control for ultimate comfort.",
      color: "from-indigo-400 to-blue-500"
    },
    {
      icon: Clock,
      title: "Remote Control Anywhere",
      description: "Forgot to turn off an appliance? Control it from anywhere in the world with a simple tap or voice command.",
      color: "from-teal-400 to-cyan-500"
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
      description: `Opening ${type} installation guide...`,
    });
    console.log(`Opening ${type} video`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">AL-BURAQ</span>
            </div>
            <Button 
              onClick={handleDownloadAPK}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AL-BURAQ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Smart Home Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of home automation with voice control, family sharing, and real-time updates. 
            Control your appliances from anywhere in the world with WiFi or locally with Bluetooth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
              <Mic className="w-4 h-4 mr-2" />
              Custom Voice Commands
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Family Sharing
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
              <Bluetooth className="w-4 h-4 mr-2" />
              WiFi + Bluetooth
            </Badge>
            <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
              <Volume2 className="w-4 h-4 mr-2" />
              Real-time Updates
            </Badge>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Revolutionary Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/40 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Smart Devices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="bg-black/40 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                      {product.discount}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{product.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-400">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-green-500/30 text-green-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Command Showcase */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Voice Control</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlike traditional voice assistants, create your own custom commands with any name you want. 
            Say "Jhanzaib turn on the fan" or "Sara switch off the lights" - the choice is yours!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 p-6 rounded-lg border border-purple-500/20">
              <Mic className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Names</h3>
              <p className="text-gray-300">Use any name - your child's name, pet's name, or any word you prefer</p>
            </div>
            <div className="bg-black/40 p-6 rounded-lg border border-pink-500/20">
              <Volume2 className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Instant Response</h3>
              <p className="text-gray-300">Commands execute immediately without internet delays</p>
            </div>
            <div className="bg-black/40 p-6 rounded-lg border border-blue-500/20">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Family Commands</h3>
              <p className="text-gray-300">Each family member can set their own unique voice commands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Videos Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Installation Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Play className="w-5 h-5 mr-2 text-green-400" />
                  Device Installation
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Learn how to properly install your AL-BURAQ smart switch device with step-by-step guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-16 h-16 text-green-400" />
                </div>
                <Button 
                  onClick={() => handleWatchVideo("device")}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Watch Installation Guide
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Play className="w-5 h-5 mr-2 text-blue-400" />
                  App Setup & Voice Commands
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Complete guide to setup the app, configure voice commands, and share with family members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-16 h-16 text-blue-400" />
                </div>
                <Button 
                  onClick={() => handleWatchVideo("app")}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                >
                  Watch App Setup Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Download Our Revolutionary App</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the AL-BURAQ Smart Home app with voice control, family sharing, and real-time updates. 
            Control your home from anywhere in the world or use Bluetooth for local control.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-green-300">
              <Mic className="w-5 h-5" />
              <span>Custom Voice Commands</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-300">
              <Users className="w-5 h-5" />
              <span>Family Sharing</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-300">
              <Bluetooth className="w-5 h-5" />
              <span>Bluetooth + WiFi</span>
            </div>
          </div>
          <Button 
            onClick={handleDownloadAPK}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg"
          >
            <Download className="w-6 h-6 mr-3" />
            Download APK Now
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            Free download • Latest version • Android compatible • Voice control enabled
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AL-BURAQ Smart Home Automation</span>
          </div>
          <p className="text-gray-400 mb-4">
            Revolutionary voice control • Family sharing • Real-time updates • WiFi & Bluetooth connectivity
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 AL-BURAQ Smart Home Automation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
