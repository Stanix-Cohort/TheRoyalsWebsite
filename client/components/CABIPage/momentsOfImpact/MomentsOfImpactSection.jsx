"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const images = [
  {
    src: "/assets/cabi-moment-1.jpg",
    alt: "Third edition of the clothe a boy child initiative",
    className: "col-span-2 md:col-span-1 h-[400px] md:h-[500px]",
  },
  {
    src: "/assets/cabi-moment-2.jpg",
    alt: "Second edition of the clothe a boy child initiative",
    className: "col-span-2 md:col-span-1 h-[300px] md:h-[350px]",
  },
  {
    src: "/assets/cabi-moment-3.jpg",
    alt: "Fourth edition of the clothe a boy child initiative",
    className: "col-span-2 max-w-3xl mx-auto w-full h-[400px] md:h-[600px]",
  },
  {
    src: "/assets/cabi-moment-4.jpg",
    alt: "First edition of the clothe a boy child initiative",
    className: "col-span-2 md:col-span-1 h-[400px] md:h-[500px]",
  },
  {
    src: "/assets/cabi-moment-5.jpg",
    alt: "Third edition of the clothe a boy child initiative",
    className: "col-span-2 md:col-span-1 h-[300px] md:h-[350px]",
  },
];

export default function MomentsOfImpactSection() {
  return (
    <section className="section !pt-[22px] bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-[19px] mb-16 md:mb-24">
          <h2
            className="!leading-[120%] !tracking-[-5%] !text-[41px] md:!text-[51px]
              !font-black text-grey-900"
          >
            Moments of Impact
          </h2>

          <p
            className="max-w-[330px] md:max-w-[559px] text-center !leading-[150%]
              !tracking-[0.2%] !text-[15px] text-grey-300"
          >
            Explore highlights from our initiatives, community outreach, and the
            lives we are touching.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <Button label="Explore Gallery" href="/gallery" variant="purple" />
        </div>
      </div>
    </section>
  );
}
