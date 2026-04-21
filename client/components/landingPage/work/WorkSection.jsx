import { Target, Heart, Users, ArrowRight } from "lucide-react";
import WorkCard from "./WorkCard";

export default function WorkSection() {
  const cards = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower individuals and communities through sustainable development, education, and mentorship programs that create lasting positive change.",
      bgColor: "bg-gold-50",
      patternSvg: "/patterns/mission-pattern.svg",
      patternClassName: "translate-x-4 -translate-y-4"
    },
    {
      icon: Heart,
      title: "Vision",
      description: "To empower individuals and communities through sustainable development, education, and mentorship programs that create lasting positive change.",
      bgColor: "bg-blue-300",
      textColor: "text-white",
      patternSvg: "/patterns/vision-pattern.svg",
      patternClassName: "translate-x-2 -translate-y-2"
    },
    {
      icon: Users,
      title: "Focus",
      description: "Youth empowerment, education support, community health, sustainable development, and building strong partnerships for greater impact.",
      bgColor: "bg-purple-100",
      patternSvg: "/patterns/focus-pattern.svg",
      patternClassName: "translate-x-6 -translate-y-6"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-grey-900 mb-6">The Heart of Our Work</h2>
          <p className="text-grey-400 max-w-xl mx-auto">
            Built on principles that drive meaningful change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="inline-flex items-center gap-6 bg-blue-300 hover:bg-blue-200 text-white rounded-full pl-8 pr-2 py-2.5 transition-all duration-300 shadow-sm group">
            <span className="font-medium text-lg">Inside The Royals</span>
            <div className="bg-foreground rounded-full p-3 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
