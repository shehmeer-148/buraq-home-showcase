
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
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
    <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-gray-900/80 to-blue-900/80">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">📞 Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-900/90 border-gray-700 hover:border-blue-500/80 transition-all duration-500 hover:scale-105 animate-scale-in group">
              <CardHeader className="text-center">
                <Mail className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-lg md:text-xl group-hover:text-blue-400 transition-colors duration-300">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 text-sm md:text-base">Get detailed information about our products</p>
                <Button 
                  onClick={() => handleContact('email')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full text-xs md:text-sm hover:scale-105 transition-all duration-300 break-words"
                >
                  info.alburaqsmarthome@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/90 border-gray-700 hover:border-green-500/80 transition-all duration-500 hover:scale-105 animate-scale-in delay-100 group">
              <CardHeader className="text-center">
                <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-lg md:text-xl group-hover:text-green-400 transition-colors duration-300">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 text-sm md:text-base">Quick support and instant responses</p>
                <Button 
                  onClick={() => handleContact('whatsapp')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 w-full text-sm md:text-base hover:scale-105 transition-all duration-300"
                >
                  +92 305 4248536
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/90 border-gray-700 hover:border-blue-500/80 transition-all duration-500 hover:scale-105 animate-scale-in delay-200 group">
              <CardHeader className="text-center">
                <Phone className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-lg md:text-xl group-hover:text-blue-400 transition-colors duration-300">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 text-sm md:text-base">Direct phone support for urgent queries</p>
                <Button 
                  onClick={() => handleContact('call')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full text-sm md:text-base hover:scale-105 transition-all duration-300"
                >
                  +92 305 4248536
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
