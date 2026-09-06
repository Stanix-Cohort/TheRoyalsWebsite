import { Icon } from "@iconify/react";
import Image from "next/image";

export default function WorkCard({
  icon,
  title,
  description,
  bgColor,
  textColor = "text-grey-900",
  patternSvg,
  patternClassName = "",
}) {
  return (
    <div
      className={`relative ${bgColor} rounded-2xl p-4 lg:p-4 flex flex-col min-h-[350px] overflow-hidden group`}
    >
      {/* Icon Badge - Octagon Shape */}
      <div className="relative z-10 w-12 h-12 mb-16 flex items-center justify-center">
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

      {/* Content */}
      <div className="relative z-10 mt-auto">
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

      {/* Background Pattern */}
      {patternSvg && (
        <div
          className={`absolute top-0 right-0 pointer-events-none ${patternClassName}`}
        >
          <Image
            src={patternSvg}
            alt=""
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
