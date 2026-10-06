import { Icon } from "@iconify/react";
import WorkCard from "./WorkCard";
import Button from "../../ui/Button";

export default function WorkSection() {
  const cards = [
    {
      icon: "material-symbols:target",
      title: "Mission",
      description:
        "To reach underserved children and create opportunities that improve their lives and future outcomes.",
      bgColor: "bg-gold-100",
      patternSvg: "/patterns/mission-pattern.svg",
      patternClassName: "translate-x-4 -translate-y-4",
    },
    {
      icon: "solar:heart-outline",
      title: "Vision",
      description:
        "To redefine the standard of living for children across Africa by expanding access to opportunities that unlock their untapped potential.",
      bgColor: "bg-blue-300",
      textColor: "text-white",
      patternSvg: "/patterns/vision-pattern.svg",
      patternClassName: "translate-x-2 -translate-y-2",
    },
    {
      icon: "formkit:people",
      title: "Focus",
      description:
        "Supporting access to education, empowering young minds, equipping the boy child, reducing inequality, and building pathways for lasting impact.",
      bgColor: "bg-purple-100",
      patternSvg: "/patterns/focus-pattern.svg",
      patternClassName: "translate-x-6 -translate-y-6",
    },
  ];

  return (
    <section
      className="section relative overflow-hidden !mt-[127px] md:!mt-[86px]
        lg:!mt-[138px] !py-0 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[50px]">
          <h2
            className="mb-[19px] text-center !leading-[120%] !tracking-[-5%] !text-[41px]
              md:!text-[51px] !font-black text-grey-900"
          >
            The Heart of Our Work
          </h2>

          <p
            className="max-w-[340px] md:max-w-[413px] mx-auto text-center !leading-[150%]
              !tracking-[0.2%] !text-[15px] text-grey-300"
          >
            Built on principles that drive meaningful change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[50px]">
          {cards.map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button label="Inside The Royals" href="/about" variant="primary" />
        </div>
      </div>
    </section>
  );
}
