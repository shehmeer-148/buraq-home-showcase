
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Smartphone, Wrench, Mic, Users, X } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Videos = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  const installationVideos = [
    {
      title: "Device Installation Guide",
      description: "Step-by-step installation of AL-BURAQ smart switches in your existing switchboard",
      icon: Wrench,
      color: "from-green-600 to-emerald-700",
      videoUrl: "https://www.youtube.com/embed/your-installation-video-id"
    },
    {
      title: "App Setup & Configuration",
      description: "Complete guide to setup the mobile app and connect to your devices",
      icon: Smartphone,
      color: "from-blue-600 to-cyan-700",
      videoUrl: "https://www.youtube.com/embed/your-app-setup-video-id"
    },
    {
      title: "Voice Commands Setup",
      description: "Learn how to create custom voice commands with any name you prefer",
      icon: Mic,
      color: "from-purple-600 to-pink-700",
      videoUrl: "https://www.youtube.com/embed/your-voice-commands-video-id"
    },
    {
      title: "Family Sharing Tutorial",
      description: "How to share device control with family members and sync real-time updates",
      icon: Users,
      color: "from-orange-600 to-red-700",
      videoUrl: "https://www.youtube.com/embed/your-family-sharing-video-id"
    }
  ];

  const handleWatchVideo = (video: any) => {
    setCurrentVideoUrl(video.videoUrl);
    setCurrentVideoTitle(video.title);
    setVideoModalOpen(true);
    toast({
      title: "Opening Video",
      description: `Opening ${video.title} guide...`,
    });
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 animate-fade-in">📹 Complete Installation Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {installationVideos.map((video, index) => (
            <Card key={index} className="bg-gray-900/90 border-gray-700 hover:border-blue-500/80 transition-all duration-500 hover:scale-105 animate-scale-in group" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle className="text-white flex items-center text-base md:text-lg group-hover:text-blue-400 transition-colors duration-300">
                  <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-400" />
                  {video.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm md:text-base">
                  {video.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`bg-gradient-to-r ${video.color} h-24 md:h-32 rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-105 transition-transform duration-300 group-hover:shadow-2xl`}>
                  <video.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <Button 
                  onClick={() => handleWatchVideo(video)}
                  className={`w-full bg-gradient-to-r ${video.color} hover:opacity-90 text-white text-sm md:text-base hover:scale-105 transition-all duration-300`}
                >
                  Watch Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

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
    </section>
  );
};

export default Videos;
