import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PrivacyPolicyIntro() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10 lg:gap-16 mb-12">
          <div className="flex flex-col gap-6 lg:w-1/5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/kids-diversity.webp"
                alt="Children of different races sitting together and smiling"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-grey-500">
              For those who expect clarity, privacy, and transparency.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="max-w-xl uppercase text-grey-500">
              The Royals is committed to protecting your privacy and handling
              your data responsibly. This policy explains what we collect, how
              we use it, and your rights.
            </p>

            <a
              href="https://the-royals.vercel.app/contact"
              className="inline-flex items-center gap-2 w-fit border-b-2 border-grey-900 pb-1 font-semibold text-grey-900"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:flex justify-center items-end gap-6">
          <h1 className="md:order-2 mb-6 md:mb-0 text-center uppercase text-grey-900">
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-2 text-grey-500">
            <span>
              <strong className="font-semibold text-grey-900">
                Last Updated:
              </strong>{" "}
              16th May, 2026
            </span>

            <span>
              <strong className="font-semibold text-grey-900">
                Effective Date:
              </strong>{" "}
              16th May, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
