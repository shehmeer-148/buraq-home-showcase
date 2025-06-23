
import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  const handleDownloadAPK = () => {
    toast({
      title: "Download Starting",
      description: "AL-BURAQ Smart Home app is being downloaded...",
    });
    console.log("APK download initiated");
  };

  const handleContact = (type: string) => {
    if (type === 'whatsapp') {
      window.open('https://wa.me/923054248536', '_blank');
    }
    toast({
      title: "Contact Info",
      description: `Opening ${type} contact...`,
    });
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden animate-scale-in">
              <img 
                src="/lovable-uploads/470ce12b-86c0-41eb-b524-10cb307488fc.png" 
                alt="AL-BURAQ Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="animate-fade-in">
              <span className="text-xl md:text-2xl font-bold text-white">AL-BURAQ</span>
              <p className="text-xs md:text-sm text-blue-400">Smart Home Automation</p>
            </div>
          </div>
          <div className="flex space-x-2 md:space-x-3">
            <Button 
              onClick={() => handleContact('whatsapp')}
              variant="outline"
              size="sm"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/20 text-xs md:text-sm hover:scale-105 transition-all duration-300 animate-scale-in"
            >
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
            <Button 
              onClick={handleDownloadAPK}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg text-xs md:text-sm hover:scale-105 transition-all duration-300 animate-scale-in"
            >
              <Download className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">App</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
