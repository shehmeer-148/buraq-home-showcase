
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Smartphone, Shield, Zap, Globe, Download, Play } from "lucide-react";
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
      description: "Control 8 different appliances simultaneously with our flagship smart home device. Perfect for complete home automation.",
      features: ["8 Channel Control", "WiFi Enabled", "10A Current Support", "Global Access"]
    },
    {
      id: 2,
      name: "AL-BURAQ 4-Channel Smart Switch",
      price: "$129",
      originalPrice: "$159",
      discount: "19% OFF",
      image: "/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png",
      description: "Ideal for medium-sized rooms, control 4 appliances with ease. Great balance of functionality and affordability.",
      features: ["4 Channel Control", "WiFi Enabled", "10A Current Support", "Global Access"]
    },
    {
      id: 3,
      name: "AL-BURAQ Single Smart Switch",
      price: "$79",
      originalPrice: "$99",
      discount: "20% OFF",
      image: "/lovable-uploads/0c770567-89d8-4a04-9d0c-cc654fd2663a.png",
      description: "Perfect starter device for single appliance control. Experience smart home automation at an affordable price.",
      features: ["Single Channel", "WiFi Enabled", "10A Current Support", "Global Access"]
    }
  ];

  const handleDownloadAPK = () => {
    toast({
      title: "Download Starting",
      description: "AL-BURAQ Smart Home app is being downloaded...",
    });
    // In a real implementation, this would trigger the actual download
    console.log("APK download initiated");
  };

  const handleWatchVideo = (type: string) => {
    toast({
      title: "Opening Video",
      description: `Opening ${type} installation guide...`,
    });
    // In a real implementation, this would open the video link
    console.log(`Opening ${type} video`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20">
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
              Smart Home Automation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Control your home appliances from anywhere in the world with our innovative WiFi-enabled smart switches. 
            Experience the future of home automation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
              <Wifi className="w-4 h-4 mr-2" />
              WiFi Enabled
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Global Control
            </Badge>
            <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              10A Safe Current
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Smart Devices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose AL-BURAQ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile Control</h3>
              <p className="text-gray-300">Control all your appliances from your smartphone with our intuitive app</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Access</h3>
              <p className="text-gray-300">Access your home devices from anywhere in the world with internet connection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safe & Reliable</h3>
              <p className="text-gray-300">Built to handle up to 10A current, perfect for fans, TVs, and other appliances</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WiFi Enabled</h3>
              <p className="text-gray-300">Easy setup with your home WiFi network for seamless connectivity</p>
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
                  Learn how to properly install your AL-BURAQ smart switch device
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
                  App Setup
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Step-by-step guide to set up the AL-BURAQ mobile application
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
          <h2 className="text-4xl font-bold text-white mb-6">Download Our App</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the AL-BURAQ Smart Home app and start controlling your appliances today. 
            Compatible with Android devices.
          </p>
          <Button 
            onClick={handleDownloadAPK}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg"
          >
            <Download className="w-6 h-6 mr-3" />
            Download APK Now
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            Free download • Latest version • Android compatible
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
            Experience the future of home automation with our innovative smart switches
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
