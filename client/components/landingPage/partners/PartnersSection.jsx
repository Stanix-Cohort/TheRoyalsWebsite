import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PartnersSection() {
  const partners = [
    { name: "Urgent 2K Campaign", logo: "/assets/logo-urgent.png", bgColor: "bg-grey-900" },
    { name: "CABI", logo: "/assets/logo-cabi.png", bgColor: "bg-purple-900" },
    { name: "NYSC", logo: "/assets/logo-nysc.png", bgColor: "bg-white" },
    { name: "Salt of the Nation", logo: "/assets/logo-ebonyi.png", bgColor: "bg-white" },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-grey-900 mb-6 font-helixa">Our Partners</h2>
          <p className="text-grey-400 max-w-xl mx-auto text-lg">
            Collaborating with organizations that share our vision for community empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 justify-center rounded-2xl border border-grey-50 h-40 shadow-sm"
            >
              <div className={`relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden ${partner.bgColor === "bg-white" ? "" : partner.bgColor}`}>
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="inline-flex items-center gap-6 bg-blue-300 hover:bg-blue-200 text-white rounded-full pl-8 pr-2 py-2.5 transition-all duration-300 shadow-sm group">
            <span className="font-medium text-lg">Support Our Mission</span>
            <div className="bg-foreground rounded-full p-3 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
