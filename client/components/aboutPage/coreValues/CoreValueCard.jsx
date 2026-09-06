import { Icon } from "@iconify/react";
import Image from "next/image";

export default function CoreValueCard({
  icon,
  title,
  description,
  bgColor,
  textColor = "text-grey-900",
  patternSvg,
}) {
  return (
    <div
      className={`relative ${bgColor} rounded-2xl p-4 min-h-[350px] overflow-hidden group`}
    >
      {/* Icon Badge - Octagon Shape - Top Right */}
      <div className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center">
        <Image
          src="/assets/octagon.svg"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain"
        />
        {icon && (
          <Icon icon={icon} className="relative z-1 w-6 h-6 text-grey-900" />
        )}
      </div>

      {/* Content - Centered */}
      <div className={`relative z-10 mt-24 max-w-[260px]`}>
        <h4
          className={`mb-[21.2px] !leading-[120%] !tracking-[-5%]
            !text-[24px] !font-bold ${textColor ? textColor : "text-grey-700"}`}
        >
          {title}
        </h4>

        <p
          className={`!leading-[150%] !tracking-[0.2%] !text-[15px]
            ${textColor ? textColor : "text-grey-400"}`}
        >
          {description}
        </p>
      </div>

      {/* Background Pattern - Bottom Right */}
      {patternSvg && (
        <div className="absolute bottom-0 right-0 pointer-events-none translate-x-4 translate-y-4 w-[120px] h-[120px]">
          <Image
            src={patternSvg}
            alt={title}
            width={180}
            height={180}
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
