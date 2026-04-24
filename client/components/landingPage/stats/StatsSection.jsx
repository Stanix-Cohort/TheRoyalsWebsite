import Image from "next/image";

export default function StatsSection() {
  const stats = [
    {
      number: "300",
      label: "Lives Impacted",
      description: "Students and families directly benefited."
    },
    {
      number: "20",
      label: "Successful Programs",
      description: "Initiatives completed across communities."
    },
    {
      number: "58",
      label: "Partner Organizations",
      description: "Collaborating for greater impact."
    }
  ];

  return (
    <section className="section bg-blue-300 overflow-hidden">
      <div className="max-w-7xl text-white mx-auto">
        {/* Header Content */}
        <div className="mb-16 md:mb-24">
          <h2 className="mb-6">Our Impact in Numbers</h2>
          <p className="max-w-xl">
            Measuring success through the lives we&rsquo;re touched and communities we&rsquo;ve empowered.
          </p>
        </div>

        {/* Stats and Image Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Stats Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="text-white">
                    {stat.number}
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl font-bold tracking-tight">{stat.label}</div>
                    <p className="">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
            <div className="relative overflow-hidden">
              <Image 
                src="/assets/grid-image.png" 
                alt="Impact communities" 
                width={800} 
                height={800} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
