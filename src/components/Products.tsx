
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Products = () => {
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

  return (
    <section className="py-16 md:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">💡 Our Smart Devices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="bg-gray-900/90 border-gray-700 hover:border-blue-500/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-scale-in group" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 md:h-56 object-cover rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-600 text-white px-2 md:px-3 py-1 text-xs md:text-sm font-bold animate-pulse">
                    {product.discount}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg md:text-xl mb-2 group-hover:text-blue-400 transition-colors duration-300">{product.name}</CardTitle>
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
                    <Badge key={idx} variant="outline" className="text-xs border-blue-500/60 text-blue-400 py-1 hover:bg-blue-500/20 transition-colors duration-300">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2 md:py-3 text-base md:text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
