import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WorkCard({ 
  icon: Icon, 
  title, 
  description, 
  bgColor, 
  textColor = "text-grey-900",
  patternSvg,
  patternClassName = ""
}) {
  return (
    <div className={`relative ${bgColor} rounded-2xl p-8 lg:p-10 flex flex-col min-h-[420px] overflow-hidden group`}>
      {/* Icon Badge */}
      <div className="relative z-10 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-24">
        {Icon && <Icon className="w-6 h-6 text-grey-900" />}
      </div>

      {/* Content */}
      <div className={`relative z-10 mt-auto ${textColor}`}>
        <h3 className="mb-4">{title}</h3>
        <p className="opacity-80 line-clamp-4">{description}</p>
      </div>

      {/* Background Pattern */}
      {patternSvg && (
        <div className={`absolute top-0 right-0 pointer-events-none ${patternClassName}`}>
          <Image 
            src={patternSvg}
            width={240}
            height={240}
            alt=""
            className="opacity-90"
          />
        </div>
      )}
    </div>
  );
}
