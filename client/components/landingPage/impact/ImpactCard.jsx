import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ImpactCard({ 
  tagSvg, 
  title, 
  description, 
  bgColor, 
  patternSvg 
}) {
  return (
    <div className={`relative ${bgColor} rounded-2xl p-8 lg:p-12 flex flex-col min-h-[500px] overflow-hidden`}>
      {/* Hanging Tag SVG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[320px] lg:max-w-[380px] pointer-events-none">
        <Image 
          src={tagSvg} 
          width={380}
          height={42}
          alt="Category" 
          className="w-full h-auto -translate-y-2"
        />
      </div>

      {/* Content */}
      <div className="mt-56 relative text-gray-700 space-y-4 z-10 max-w-[90%] md:max-w-[80%]">
        <h5 className=" ">
          {title}
        </h5>
        <p className="mb-10 text-gray-600">
          {description}
        </p>

        <button className="inline-flex items-center gap-4 bg-white hover:bg-grey-50 text-grey-900 rounded-full pl-6 pr-2 py-2 transition-all duration-300 group">
          <span className="font-medium text-base">Learn More</span>
          <div className="bg-grey-900 rounded-full p-3 group-hover:scale-110 transition-transform">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </button>
      </div>

      {/* Background Graphic Pattern */}
      {patternSvg && (
        <div className="absolute bottom-0 right-0 pointer-events-none flex items-end justify-end overflow-hidden">
          <Image 
            src={patternSvg}
            width={300}
            height={300}
            alt="" 
            className="translate-x-10 translate-y-10 opacity-90"
          />
        </div>
      )}
    </div>
  );
}
