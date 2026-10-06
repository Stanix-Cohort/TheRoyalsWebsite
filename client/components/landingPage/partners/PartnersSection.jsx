import Image from "next/image";
import Button from "../../ui/Button";

export default function PartnersSection() {
  const partners = [
    {
      name: "Urgent 2K Campaign",
      logo: "/assets/logo-urgent.png",
      bgColor: "bg-grey-900",
    },
    { name: "CABI", logo: "/assets/logo-cabi.png", bgColor: "bg-purple-900" },
    { name: "NYSC", logo: "/assets/logo-nysc.png", bgColor: "bg-white" },
    {
      name: "Salt of the Nation",
      logo: "/assets/logo-ebonyi.png",
      bgColor: "bg-white",
    },
    { name: "LUX O'BEI", logo: "/assets/logo-lux.png", bgColor: "bg-white" },
  ];

  return (
    <section className="section !py-[74px] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[50px]">
          <h2
            className="mb-[19px] text-center !leading-[120%] !tracking-[-5%] !text-[41px]
              md:!text-[51px] !font-black text-grey-900"
          >
            Our Partners
          </h2>

          <p
            className="max-w-[373px] md:max-w-[413px] mx-auto text-center !leading-[150%]
              !tracking-[0.2%] !text-[15px] text-grey-300"
          >
            Collaborating with organizations that share our vision for community
            empowerment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center p-4 justify-center rounded-2xl border border-grey-50 h-40 border border-grey-50 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div
                className={`relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            label="Support Our Mission"
            href="/contact"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
