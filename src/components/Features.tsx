
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mic, RefreshCw, Bluetooth, Wifi, Fan, Wrench } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share app access with family members so everyone can control appliances. Real-time sync keeps everyone updated instantly.",
      color: "from-blue-600 to-cyan-700"
    },
    {
      icon: Mic,
      title: "Custom Voice Commands",
      description: "Create personalized voice commands like 'Jhanzaib turn on the fan'. No need to say 'Alexa' or 'Siri' - use any name you want!",
      color: "from-green-600 to-emerald-700"
    },
    {
      icon: RefreshCw,
      title: "Real-time Updates",
      description: "See which appliances are running in real-time. App syncs instantly with device and all family members simultaneously.",
      color: "from-purple-600 to-pink-700"
    },
    {
      icon: Bluetooth,
      title: "Bluetooth Control",
      description: "Local control via Bluetooth with range up to 100 meters - no internet needed for nearby device operation.",
      color: "from-orange-600 to-red-700"
    },
    {
      icon: Wifi,
      title: "WiFi Connectivity",
      description: "Connect your devices to WiFi for remote control from anywhere in the world through internet connection.",
      color: "from-cyan-600 to-blue-700"
    },
    {
      icon: Fan,
      title: "Dimmer & Speed Control",
      description: "Control fan speed from 0-100% with our advanced dimmer units. Perfect speed control for ultimate comfort.",
      color: "from-indigo-600 to-purple-700"
    },
    {
      icon: Wrench,
      title: "Plug & Play Installation",
      description: "No need to replace your old switchboard! Just place inside your existing board - your old switches still work physically.",
      color: "from-teal-600 to-cyan-700"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">🚀 Revolutionary Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-blue-500/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-scale-in group" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl md:text-2xl mb-2 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</CardTitle>
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
  );
};

export default Features;
