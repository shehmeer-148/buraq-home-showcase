import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Smartphone, Shield, Zap, Globe, Download, Play, Plug, Users, User, Mic, Volume2, Bluetooth, Sliders, Clock, Mail, Phone, MessageCircle, Wrench, Lightbulb, Fan } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

const voiceCommands = [
  '"Jhanzaib turn on the fan"',
  '"Sara switch off the lights"',
  '"Amna dim the lights"',
  '"Ali turn off the AC"',
];

const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
const [displayedText, setDisplayedText] = useState("");
const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  const current = voiceCommands[currentCommandIndex];
  const interval = setInterval(() => {
    if (charIndex < current.length) {
      setDisplayedText((prev) => prev + current[charIndex]);
      setCharIndex((prev) => prev + 1);
    } else {
      clearInterval(interval);
      setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentCommandIndex((prev) => (prev + 1) % voiceCommands.length);
      }, 1500);
    }
  }, 70);

  return () => clearInterval(interval);
}, [charIndex, currentCommandIndex, voiceCommands]);

  const products = [
    {
      id: 1,
      name: "AL-BURAQ 8-Channel Smart Switch",
      price: "PKR 5000",
      originalPrice: "PKR 6000",
      discount: "20% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Tailored for one-room automation, this powerful device lets you control up to 8 appliances — lights, fans, plugs, and more — all with voice control and seamless family sharing.",
      features: ["8 Channel Control", "WiFi", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 2,
      name: "AL-BURAQ 4-Channel Smart Switch",
      price: "PKR 3500",
      originalPrice: "PKR 4000",
      discount: "19% OFF",
      image: "/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png",
      description: "Ideal for medium-sized rooms, control 4 appliances with ease. Great balance of functionality and affordability with advanced voice control.",
      features: ["4 Channel Control", "WiFi", "Voice Commands", "Family Sharing", "Real-time Updates", "10A Current Support"]
    },
    {
      id: 3,
      name: "AL-BURAQ 2-Channel Smart Switch",
      price: "PKR 2000",
      originalPrice: "PKR 2500",
      discount: "20% OFF",
      image: "/lovable-uploads/0c770567-89d8-4a04-9d0c-cc654fd2663a.png",
      description: "Perfect starter device for single appliance control. Experience smart home automation at an affordable price with voice control.",
      features: ["Single Channel", "WiFi", "Voice Commands", "Family Sharing", "Real-time Updates", "AC compatible",]
    },
    {
      id: 4,
      name: "AL-BURAQ 5+1 Dimmer Control",
      price: "PKR 6500",
      originalPrice: "PKR 7000",
      discount: "17% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Advanced control with 5 on/off switches plus 1 dimmer unit. Control fan speed from 0-100% and manage multiple appliances with precision.",
      features: ["5 On/Off + 1 Dimmer", "Speed Control 0-100%", "WiFi", "Voice Commands", "Family Sharing", "Premium Features"]
    },
    {
      id: 5,
      name: "AL-BURAQ 2+1 Smart Control",
      price: "PKR 3000",
      originalPrice: "PKR 3500",
      discount: "16% OFF",
      image: "/lovable-uploads/44a60ac1-89cb-48dc-8c14-4e88040434fa.png",
      description: "Compact solution with 2 on/off switches and 1 dimmer control. Perfect for smaller spaces with fan speed control capabilities.",
      features: ["2 On/Off + 1 Dimmer", "Fan Speed Control", "WiFi", "Voice Commands", "Family Sharing", "Compact Design"]
    },
    {
      id: 6,
      name: "AL-BURAQ Heavy Duty 25A",
      price: "PKR 2000",
      originalPrice: "PKR 2500",
      discount: "14% OFF",
      image: "/lovable-uploads/740146a0-00fd-4bc0-b0c8-eebbd03653a2.png",
      description: "Industrial-grade smart switch supporting up to 25 amps. Perfect for AC units, water heaters, and heavy electrical appliances.",
      features: ["25A Heavy Load", "Single Switch", "AC Compatible", "Industrial Grade", "Voice Commands", "Family Sharing", "Premium Build"]
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share app access with family members so everyone can control appliances. Real-time sync keeps everyone updated instantly.",
      color: "from-slate-500 to-gray-600"
    },
    {
      icon: Mic,
      title: "Custom Voice Commands",
      description: "Create personalized voice commands like 'Jhanzaib turn on the fan'. No need to say 'Alexa' or 'Siri' - use any name you want!",
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: Globe,
      title: "Real-time Updates",
      description: "See which appliances are running in real-time. App syncs instantly with device and all family members simultaneously.",
      color: "from-gray-500 to-slate-600"
    },
    {
      icon: Wifi,
      title: "WiFi Mode",
      description: "Works with WiFi connectivity for seamless control from anywhere in the world. Reliable internet-based control for your smart home.",
      color: "from-slate-700 to-gray-800"
    },
    {
      icon: Fan,
      title: "Dimmer & Speed Control",
      description: "Control fan speed from 0-100% with our advanced dimmer units. Perfect speed control for ultimate comfort.",
      color: "from-gray-600 to-slate-700"
    },
    {
      icon: Wrench,
      title: "Plug & Play Installation",
      description: "No need to replace your old switchboard! Just place inside your existing board - your old switches still work physically.",
      color: "from-slate-500 to-gray-600"
    }
  ];

  const installationVideos = [
    {
      title: "Device Installation Guide",
      description: "Learn how to safely install the AL-BURAQ Smart Switches into your existing switchboard setup.",
      icon: Wrench,
      color: "from-slate-500 to-gray-600",
      url: "https://www.youtube.com/embed/eczKYZi85lY"
    },
    {
      title: "App Setup & Configuration",
      description: "Step-by-step guide to set up the AL-BURAQ mobile app and connect your smart devices easily.",
      icon: Smartphone,
      color: "from-slate-600 to-gray-700",
      url: "https://www.youtube.com/embed/O-34NOzetv4"
    },
    {
      title: "Voice Commands Setup",
      description: "Learn how to add custom voice commands and personalize your smart home interactions.",
      icon: Mic,
      color: "from-gray-600 to-slate-700",
      url: "https://www.youtube.com/embed/JIY2DYImALM"
    },
    {
      title: "WiFi Settings",
      description: "This video explains how to update or change your AL-BURAQ device WiFi using the app.",
      icon: Wifi,
      color: "from-slate-700 to-gray-800",
      url: "https://www.youtube.com/embed/W9whvtlJDiE"
    },
    {
      title: "Profile Setting Tutorial",
      description: "A quick tutorial on how to update your profile name and profile picture in the app.",
      icon: User,
      color: "from-gray-500 to-slate-600",
      url: "https://www.youtube.com/embed/h1ibjLFNjvs"
    },
    {
      title: "Wiring Schematics Tutorial",
      description: "Detailed wiring diagram to help you connect your AL-BURAQ device to your switchboard properly.",
      icon: Plug,
      color: "from-slate-600 to-gray-700",
      url: "https://www.youtube.com/embed/dpl4CPUovT0"
    }
  ];

const handleDownloadAPK = () => {
  toast({
    title: "Download Starting",
    description: "AL-BURAQ Smart Home app is being downloaded...",
  });

  // Open download in a new tab
  window.open(
    "https://github.com/shehmeer-148/buraq-home-showcase/releases/download/v1.0.0/AL.BURAQ.Smart.Home.apk",
    "_blank"
  );
};

  const handleWatchVideo = (title: string) => {
  const video = installationVideos.find((v) => v.title === title);
  if (video?.url) {
    setVideoUrl(video.url);
  }

  toast({
    title: "Opening Video",
    description: `Opening ${title} guide...`,
  });
};

  const handleContact = (type: string) => {
    if (type === 'email') {
window.open("https://mail.google.com/mail/?view=cm&to=info.alburaqsmarthome@gmail.com", "_blank");
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

  const handleOrder = (product: {
  name: string;
  price: string;
  discount: string;
  features: string[];
}) => {
  const message = `
*Product Inquiry*

📦 *Product:* ${product.name}
💸 *Price:* ${product.price} (${product.discount})

✨ *Features:*
${product.features.map((f) => `- ${f}`).join("\n")}

👤 *Name:* 
📞 *Phone:* 
📍 *Address:* 
📝 *Additional Notes:* 
`;

  const encodedMsg = encodeURIComponent(message);
  const phone = "923054248536"; // WhatsApp number without +
  window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-slate-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo + Text */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="/lovable-uploads/66f5d438-3ca2-41c8-9933-5ceff1c56961.png"
                  alt="AL-BURAQ Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="text-lg sm:text-2xl font-bold text-white">AL-BURAQ</span>
                <p className="text-xs sm:text-sm text-slate-300">Smart Home Automation</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => handleContact('whatsapp')}
                variant="outline"
                className="border-slate-500/50 text-slate-300 hover:bg-slate-500/20 px-2 sm:px-4"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">WhatsApp</span>
              </Button>
              <Button
                onClick={handleDownloadAPK}
                className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white shadow-lg px-2 sm:px-4"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Download App</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-gray-600/20 blur-3xl"></div>
    <div className="container mx-auto text-center relative z-10">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
        AL-BURAQ
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-slate-300 animate-pulse">
          Smart Home Automation
        </span>
      </h1>
     <p
  className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed text-center animate-fade-in-up"
>
  ✨ Experience the future of living with our <span className="text-slate-400 font-semibold">Plug & Play</span> Smart System —
  <br className="hidden md:block" />
  No rewiring, No hassle.
  <br /><br />
  🗣️ Control appliances using <span className="text-slate-300 font-semibold">Custom Voice Commands</span>,
   <br className="hidden md:block" />
  Share access with your family, and enjoy <span className="text-slate-300 font-semibold">Real-Time Control</span> from anywhere in the world.
</p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm border border-slate-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
          <Wrench className="w-5 h-5 text-slate-300" />
          <span className="text-slate-200 font-medium">🔌 Plug & Play - No Rewiring</span>
        </div>
        <div className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm border border-slate-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
          <Mic className="w-5 h-5 text-slate-300" />
          <span className="text-slate-200 font-medium">🎙️ Custom Voice Commands</span>
        </div>
        <div className="bg-gradient-to-r from-gray-500/20 to-slate-500/20 backdrop-blur-sm border border-gray-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
          <Users className="w-5 h-5 text-gray-300" />
          <span className="text-gray-200 font-medium">👥 Family Sharing</span>
        </div>
        <div className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm border border-slate-500/40 rounded-full px-6 py-3 flex items-center space-x-3">
          <Wifi className="w-5 h-5 text-slate-300" />
          <span className="text-slate-200 font-medium">📡 WiFi Control</span>
        </div>
      </div>
    </div>
  </section>

      {/* Plug & Play Feature Highlight */}
  <section className="py-16 px-4 bg-gradient-to-r from-slate-600/10 to-gray-600/10 border-y border-slate-500/20">
    <div className="container mx-auto text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6">🔌 Revolutionary Plug & Play Technology</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/40 p-6 rounded-xl border border-slate-500/30">
            <Wrench className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Rewiring Needed</h3>
            <p className="text-gray-300">Simply place inside your existing switchboard - no destruction or rewiring required</p>
          </div>
          <div className="bg-black/40 p-6 rounded-xl border border-gray-500/30">
            <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Old Switches Still Work</h3>
            <p className="text-gray-300">Your physical switches remain functional - control appliances both physically and virtually</p>
          </div>
          <div className="bg-black/40 p-6 rounded-xl border border-slate-500/30">
            <Zap className="w-16 h-16 text-slate-400 mx-auto mb-4" />
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
          <Card key={index} className="bg-black/50 border-slate-500/30 hover:border-slate-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20">
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
      <h2 className="text-5xl font-bold text-white text-center mb-16">
        💡 Our Smart Devices
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card
            key={product.id}
            className="bg-black/50 border-slate-500/30 hover:border-slate-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20"
          >
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
              <CardTitle className="text-white text-xl mb-2">
                {product.name}
              </CardTitle>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl font-bold text-slate-400">
                  {product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-6 text-base leading-relaxed">
                {product.description}
              </CardDescription>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {product.features.map((feature, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-xs border-slate-500/40 text-slate-300 py-1"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
              <Button
  onClick={() => handleOrder(product)}
  className="w-full bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white py-3 text-lg font-semibold"
>
  Order Now
</Button>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
      {/* Voice Command Showcase */}
       <section className="py-20 px-4 bg-gradient-to-r from-slate-600/20 to-gray-600/20">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold text-white mb-8">
        🎙️ Revolutionary Voice Control
      </h2>
     
     <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-center">
  Unlike Traditional Voice Assistants, Create Your Own Commands With Any Name You Want.
  <br />
  <strong className="text-slate-300 text-3xl block mt-4">
    {displayedText}
    <span className="animate-pulse text-slate-400 ml-1">|</span>
  </strong>
  <br />
  <span className="text-white text-xl block mt-2">— The choice is yours! —</span>
</p>


      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-black/50 p-8 rounded-xl border border-slate-500/30 hover:border-slate-500/60 transition-all">
          <Mic className="w-16 h-16 text-slate-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-4">
            Custom Names
          </h3>
          <p className="text-gray-300 text-lg">
            Use any name - your child's name, pet's name, or any word you
            prefer
          </p>
        </div>
        <div className="bg-black/50 p-8 rounded-xl border border-gray-500/30 hover:border-gray-500/60 transition-all">
          <Volume2 className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-4">
            Instant Response
          </h3>
          <p className="text-gray-300 text-lg">
            Commands execute immediately without internet delays
          </p>
        </div>
        <div className="bg-black/50 p-8 rounded-xl border border-slate-500/30 hover:border-slate-500/60 transition-all">
          <Users className="w-16 h-16 text-slate-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-4">
            Family Commands
          </h3>
          <p className="text-gray-300 text-lg">
            Each family member can set their own unique voice commands
          </p>
        </div>
      </div>
    </div>
  </section>

      {/* Installation Videos Section */}
      <section className="py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-5xl font-bold text-white text-center mb-16">
        📹 Complete Installation Guides
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {installationVideos.map((video, index) => (
          <Card
            key={index}
            className="bg-black/50 border-slate-500/30 hover:border-slate-500/60 transition-all hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="text-white flex items-center text-lg">
                <Play className="w-5 h-5 mr-2 text-slate-400" />
                {video.title}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {video.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`bg-gradient-to-r ${video.color} h-32 rounded-xl flex items-center justify-center mb-4 shadow-lg`}
              >
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

       {/* ✅ Place the modal just above the closing </div> */}
    {videoUrl && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
        <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            src={videoUrl}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            title="Installation Video"
          ></iframe>
          <button
            onClick={() => setVideoUrl(null)}
            className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 w-8 h-8 rounded-full flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      </div>
    )}

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-gray-800/50">
   <div className="container mx-auto px-4">
  <h2 className="text-5xl font-bold text-white text-center mb-16">
    📞 Get In Touch
  </h2>
  <div className="max-w-4xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Email Card */}
      <Card className="bg-black/50 border-slate-500/30 hover:border-slate-500/60 transition-all hover:scale-105">
        <CardHeader className="text-center">
          <Mail className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <CardTitle className="text-white text-xl">Email Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-300 mb-4">
            Get detailed information about our products
          </p>
        <Button
  onClick={() => handleContact("email")}
  className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 w-full px-3 py-3 text-sm overflow-hidden whitespace-normal break-words text-center"
>
  <span className="block w-full break-words text-sm">
    info.alburaqsmarthome@gmail.com
  </span>
</Button>
        </CardContent>
      </Card>

      {/* WhatsApp Card */}
      <Card className="bg-black/50 border-slate-500/30 hover:border-slate-500/60 transition-all hover:scale-105">
        <CardHeader className="text-center">
          <MessageCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <CardTitle className="text-white text-xl">WhatsApp</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-300 mb-4">
            Quick support and instant responses
          </p>
          <Button
            onClick={() => handleContact("whatsapp")}
            className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 w-full"
          >
            +92 305 4248536
          </Button>
        </CardContent>
      </Card>

      {/* Call Card */}
      <Card className="bg-black/50 border-slate-500/30 hover:border-slate-500/60 transition-all hover:scale-105">
        <CardHeader className="text-center">
          <Phone className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <CardTitle className="text-white text-xl">Call Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-300 mb-4">
            Direct phone support for urgent queries
          </p>
          <Button
            onClick={() => handleContact("call")}
            className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 w-full"
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
  <section className="py-20 px-4 bg-gradient-to-r from-slate-600/20 to-gray-600/20">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold text-white mb-8">
        📱 Download Our Revolutionary App
      </h2>
      <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
        Get the AL-BURAQ Smart Home app with custom voice control, family
        sharing, and real-time updates. Control your home from anywhere in
        the world or use WiFi for seamless control.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="flex items-center space-x-3 text-slate-300 bg-black/30 px-6 py-3 rounded-full">
          <Mic className="w-6 h-6" />
          <span className="text-lg">Custom Voice Commands</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-300 bg-black/30 px-6 py-3 rounded-full">
          <Users className="w-6 h-6" />
          <span className="text-lg">Family Sharing</span>
        </div>
        <div className="flex items-center space-x-3 text-slate-300 bg-black/30 px-6 py-3 rounded-full">
          <Wifi className="w-6 h-6" />
          <span className="text-lg">WiFi Control</span>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <Button
          onClick={handleDownloadAPK}
          size="lg"
          className="w-full sm:w-auto min-h-[80px] flex flex-col sm:flex-row items-center justify-center bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-2xl hover:shadow-slate-500/50 transition-all transform hover:scale-105 active:scale-95"
        >
          <Download className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-0 sm:mr-4" />
          <span>Download APK Now - FREE</span>
        </Button>
      </div>
      <p className="text-lg text-gray-400 mt-6">
        ✅ Free download • ✅ Latest version • ✅ Android compatible • ✅
        Voice control enabled
      </p>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black/60 py-16 px-4 border-t border-slate-500/20">
    <div className="container mx-auto text-center">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
  <img
    src="/lovable-uploads/66f5d438-3ca2-41c8-9933-5ceff1c56961.png"
    alt="AL-BURAQ Logo"
    className="w-full h-full object-contain"
  />
</div>
        <div>
          <span className="text-2xl font-bold text-white">
            AL-BURAQ Smart Home Automation
          </span>
        </div>
      </div>
      <p className="text-gray-400 mb-6 text-lg">
        🔌 Plug & Play Installation • 🎙️ Custom Voice Control • 👥 Family
        Sharing • 📡 WiFi Control • ⚡ Up to 25A Support
      </p>
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="mailto:info.alburaqsmarthome@gmail.com"
          className="text-slate-400 hover:text-slate-300 transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/923054248536"
          target="_blank"
          className="text-slate-400 hover:text-slate-300 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+923054248536"
          className="text-slate-400 hover:text-slate-300 transition-colors"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        © 2024 AL-BURAQ Smart Home Automation. All rights reserved. | Email:
        info.alburaqsmarthome@gmail.com | Phone: +92 305 4248536
      </p>
    </div>
  </footer>
    </div>
  );
};

export default Index;
