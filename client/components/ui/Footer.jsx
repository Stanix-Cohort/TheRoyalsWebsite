"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Logo } from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const INITIATIVES = [
  { label: "Clothe A BoyChild Initiative (CABI)", href: "/initiatives/cabi" },
  { label: "Urgent 2K Campaign", href: "/initiatives/urgent-2k" },
];

const CONTACT_INFO = [
  {
    icon: "formkit:email",
    content: "hello.theroyals@gmail.com",
    href: "mailto:hello.theroyals@gmail.com",
    srLabel: "Email us at hello.theroyals@gmail.com",
  },
  {
    icon: "proicons:call",
    content: "+2347010990908",
    href: "tel:+2347010990908",
    srLabel: "Call us on +234 701 099 0908",
  },
  {
    icon: "ic:outline-whatsapp",
    content: "+2348166527163",
    href: "https://wa.me/2348166527163",
    isExternal: true,
    srLabel: "Message us on WhatsApp at +234 816 652 7163",
  },
  {
    icon: "boxicons:location",
    content:
      "19, Olanrewaju Street, Off Orile Road, Tabon-Tabon, Agege, Lagos, Nigeria.",
  },
];

// const SOCIAL_LINKS = [
//   { icon: "mynaui:youtube-solid", href: "#", label: "YouTube" },
//   { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
//   { icon: "prime:twitter", href: "#", label: "X" },
//   { icon: "ri:instagram-fill", href: "#", label: "Instagram" },
// ];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="section !pt-[87px] !pb-[24.22px] md:!pb-[37.8px] lg:!pb-[52.67px]
        bg-(--color-footer) text-white"
    >
      <h1
        className="mb-[110px] md:mb-[98.01px] lg:mb-[166px] text-right !leading-[100%]
          !tracking-[-4%] !text-[60px] md:!text-[100px] !font-bold text-white"
      >
        Get Involved
        <span className="text-blue-200">.</span>
      </h1>

      {/* Grid */}
      <div
        className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_0.95fr_1.3fr_1.1fr]
          gap-x-8 gap-y-20 md:gap-y-14"
      >
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-[17px]">
          <div className="w-[163px] h-[57.99px]">
            <Logo variant="white" width="100%" height="100%" />
          </div>

          <p
            className="max-w-[314px] md:max-w-[1021px] lg:max-w-[314px] !leading-[150%]
              !tracking-[0.2%] !text-[15px] text-grey-50"
          >
            Empowering communities through education, mentorship, and
            sustainable development initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <nav
          aria-labelledby="footer-quick-links"
          className="flex flex-col gap-[17px]"
        >
          <h3
            id="footer-quick-links"
            className="!leading-[120%] !tracking-[-5%] !text-[21px] !font-black
              text-white"
          >
            Quick Links
          </h3>

          <ul className="flex flex-col gap-[10px]">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="leading-[150%] tracking-[0.2%] text-[15px] text-grey-50
                    transition-colors duration-150 hover:text-blue-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Initiatives */}
        <nav
          aria-labelledby="footer-initiatives"
          className="flex flex-col gap-[17px]"
        >
          <h3
            id="footer-initiatives"
            className="!leading-[120%] !tracking-[-5%] !text-[21px] !font-black
              text-white"
          >
            Our Initiatives
          </h3>

          <ul className="flex flex-col gap-[10px]">
            {INITIATIVES.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="leading-[150%] tracking-[0.2%] text-[15px] text-grey-50
                    transition-colors duration-150 hover:text-blue-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-[17px]">
          <h3
            className="!leading-[120%] !tracking-[-5%] !text-[21px] !font-black
              text-white"
          >
            Get in Touch
          </h3>

          <div className="flex flex-col gap-[34px]">
            <address className="not-italic">
              <ul className="flex flex-col gap-[10px]">
                {CONTACT_INFO.map(
                  ({ icon, content, href, isExternal, srLabel }) => (
                    <li key={content} className="flex gap-[10px]">
                      <Icon
                        icon={icon}
                        className="shrink-0 text-white"
                        width="20"
                      />

                      {href ? (
                        <Link
                          href={href}
                          className="!leading-[150%] !tracking-[0.2%] !text-[15px]
                            text-grey-50 transition-colors duration-150
                            hover:text-blue-300"
                          {...(isExternal
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : null)}
                        >
                          <span aria-hidden="true">{content}</span>
                          <span className="sr-only">{srLabel ?? content}</span>
                        </Link>
                      ) : (
                        <span
                          className="!leading-[150%] !tracking-[0.2%] !text-[15px]
                            text-grey-50"
                        >
                          {content}
                        </span>
                      )}
                    </li>
                  ),
                )}
              </ul>
            </address>

            {/* Social Icons */}
            {/* <div className="flex items-center gap-[10px]">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`The Royals on ${label}`}
                  className="text-white transition-colors duration-150
                    hover:text-blue-300"
                >
                  <Icon icon={icon} width="20" />
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="mt-[88px] md:mt-[62px] lg:mt-[88px] !leading-[150%] !tracking-[0.2%]
          text-center !text-[15px] text-grey-50"
      >
        &copy; {currentYear} The Royals. All rights reserved.
      </p>

      {/* Colorful shapes at the footer bottom  */}
      <div
        className="relative max-w-[367px] md:max-w-[656px] lg:max-w-[799px] h-[48.79px]
          md:h-[87.2px] lg:h-[106.21px] mx-auto md:mx-0 mt-[85px] md:mt-0 lg:mt-[33.01px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/footer-image.svg"
          alt="Decorative Shapes"
          fill
          sizes="(min-width: 1024px) 799px, (min-width: 768px) 656px, 367px"
          className="object-contain"
        />
      </div>
    </footer>
  );
}
