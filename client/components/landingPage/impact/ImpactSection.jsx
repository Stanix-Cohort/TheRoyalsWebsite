import ImpactCard from "./ImpactCard";

export default function ImpactSection() {
  const impacts = [
    {
      tagSvg: "/patterns/community-support.png",
      title: "Clothe A BoyChild Initiative (CABI)",
      description:
        "Providing school uniforms, materials, and support to underprivileged boys to ensure they have equal access to education without the barrier of inadequate resources.",
      bgColor: "bg-purple-100",
      patternSvg: "/patterns/crown.svg",
      href: "/initiatives/cabi",
    },
    {
      tagSvg: "/patterns/education-empowerment.png",
      title: "Urgent 2K Campaign",
      description:
        "A rapid response fundraising campaign to address immediate community needs, from medical emergencies to educational support, one contribution at a time.",
      bgColor: "bg-green-100",
      patternSvg: "/assets/rainbow.svg",
      href: "/initiatives/urgent-2k",
    },
  ];

  return (
    <section
      className="section !mt-[78.06px] md:!mt-[86.06px]
        lg:!mt-[124.06px] !py-0 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[50px]">
          <h2
            className="mb-[19px] text-center !leading-[120%] !tracking-[-5%] !text-[41px]
              md:!text-[51px] !font-black text-grey-900"
          >
            How We&rsquo;re Changing Lives
          </h2>

          <p
            className="max-w-[351px] md:max-w-[413px] mx-auto text-center !leading-[150%]
              !tracking-[0.2%] !text-[15px] text-grey-300"
          >
            Targeted programs designed to create sustainable impact in
            communities.
          </p>
        </div>

        <div
          className="flex flex-col flex-wrap md:flex-row max-w-6xl justify-center
            items-stretch mx-auto gap-8 "
        >
          {impacts.map((impact, index) => (
            <ImpactCard key={index} {...impact} />
          ))}
        </div>
      </div>
    </section>
  );
}
