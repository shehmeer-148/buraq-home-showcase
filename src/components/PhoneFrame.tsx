interface PhoneFrameProps {
  src: string;
  alt: string;
}

const PhoneFrame = ({ src, alt }: PhoneFrameProps) => {
  return (
    <div className="relative w-[260px] sm:w-[280px] md:w-[300px] aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-[0_25px_60px_-15px_rgba(168,85,247,0.45)] border border-purple-500/30">
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-10 rounded-l bg-slate-700"></div>
      <div className="absolute -left-[3px] top-40 w-[3px] h-16 rounded-l bg-slate-700"></div>
      <div className="absolute -right-[3px] top-32 w-[3px] h-20 rounded-r bg-slate-700"></div>

      {/* Screen */}
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-700 mr-2"></div>
        </div>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PhoneFrame;
