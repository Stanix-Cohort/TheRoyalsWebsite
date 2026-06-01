"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Button from "./Button";
import { subscribeToNewsletter } from "@/app/actions";

export default function NewsletterSection({ bgVariant = "blue" }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, success, error

  const bgClasses = {
    blue: "bg-blue-300",
    purple: "bg-purple-700",
    urgent: "bg-green-600", // Based on urgent 2k theme if applicable
  };

  const buttonVariants = {
    blue: "secondaryBlue",
    purple: "secondaryPurple",
    urgent: "secondaryGreen",
  };

  const [errors, setErrors] = useState({ fullName: "", email: "" });

  const validateFullName = (val) => {
    if (val.trim() === "") return "Full name is required.";
    return "";
  };

  const validateEmail = (val) => {
    if (val.trim() === "") return "Email address is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please enter a valid email format (e.g. name@example.com).";
    return "";
  };

  const handleBlur = (field) => {
    if (field === "fullName") setErrors((prev) => ({ ...prev, fullName: validateFullName(fullName) }));
    if (field === "email") setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return;

    setIsSubmitting(true);
    try {
      const result = await subscribeToNewsletter({ fullName, email });
      if (result.success) {
        setStatus("success");
        setFullName("");
        setEmail("");
        setConsent(false);
        setErrors({ fullName: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section bg-white">
      <div className={`flex flex-col gap-[44.2px] px-[23.4px] py-[74px] md:rounded-[26px] ${bgClasses[bgVariant] || bgClasses.blue}`}>
        
        {status === "idle" && (
          <>
            <div className="flex flex-col items-center gap-[19px]">
              <h2 className="leading-[120%] tracking-[-5%] text-center text-[41px] md:text-[51px] font-black text-white">
                Stay Connected
              </h2>

              <p className="max-w-[413px] leading-[150%] tracking-[0.2%] text-center text-[15px] text-grey-50">
                Subscribe to our newsletter for updates on our programs, impact stories, and how you can get involved.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-[44.2px]">
              <div className="flex flex-col gap-[20px] w-full items-center">
                <div className="flex flex-col items-center gap-[13px] w-full">
                  <div className="w-full md:max-w-[581.1px] lg:max-w-[771px] flex flex-col gap-1">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                      }}
                      onBlur={() => handleBlur("fullName")}
                      placeholder="Full Name"
                      className={`w-full outline-none rounded-[7.8px] p-[13px] leading-[150%] tracking-[0.2%] text-[15px] text-grey-900 placeholder:text-grey-900 bg-white/10 border ${errors.fullName ? "border-[#ff8a8a]" : "border-white/5"} focus:bg-white/20 transition-all duration-300`}
                    />
                    {errors.fullName && <span className="text-[#ff8a8a] text-[13px] px-1">{errors.fullName}</span>}
                  </div>

                  <div className="w-full md:max-w-[581.1px] lg:max-w-[771px] flex flex-col gap-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      onBlur={() => handleBlur("email")}
                      placeholder="Email Address"
                      className={`w-full outline-none rounded-[7.8px] p-[13px] leading-[150%] tracking-[0.2%] text-[15px] text-grey-900 placeholder:text-grey-900 bg-white/10 border ${errors.email ? "border-[#ff8a8a]" : "border-white/5"} focus:bg-white/20 transition-all duration-300`}
                    />
                    {errors.email && <span className="text-[#ff8a8a] text-[13px] px-1">{errors.email}</span>}
                  </div>
                </div>

                <div className="flex items-center gap-2 max-w-[771px] w-full px-2">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      required
                      id="privacy-policy"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/5 transition-all checked:bg-white/20"
                    />

                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <label
                    htmlFor="privacy-policy"
                    className="leading-[150%] tracking-[0.2%] text-[13px] md:text-[15px] text-grey-50"
                  >
                   I have read the {" "}
                    <Link
                      href="/privacy-policy"
                      className="underline hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and consent to receive email updates from The Royals and understand I can unsubscribe at any time.
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !consent || fullName.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                label={isSubmitting ? "Subscribing..." : "Subscribe Now"}
                variant={buttonVariants[bgVariant] || buttonVariants.blue}
                icon={isSubmitting ? "tabler:loader-2" : "tabler:arrow-right"}
                className={isSubmitting ? "animate-pulse" : ""}
              />
            </form>
          </>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
            <div className="relative w-24 h-24 mb-8">
              <svg width="100%" height="100%" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="75.3333" height="75.3333" rx="37.6667" fill="white"/>
                <path 
                  d="M22.5999 38.9915C22.5999 38.9915 29.5537 51.6164 35.3486 48.4601C41.1434 45.3039 52.7332 26.3667 52.7332 26.3667" 
                  stroke={bgVariant === "purple" ? "#7C3AED" : bgVariant === "urgent" ? "#16a34a" : "#5D75D4"} 
                  strokeWidth="9.41667" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
             <h2 className="leading-[120%] tracking-[-5%] text-center text-[41px] md:text-[51px] font-black text-white mb-6">
                Subscription Successful
              </h2>
              <p className="max-w-[500px] leading-[150%] tracking-[0.2%] text-center text-[15px] md:text-[17px] text-grey-50">
                You&apos;re now part of a growing community creating real change. We&apos;ll keep you updated on our progress and how you can make a difference.
              </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
             <div className="relative w-24 h-24 mb-8">
                <Image 
                  src="/assets/something-wrong.gif"
                  alt="Error"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className=" text-center font-black text-white mb-6">
                Something Went Wrong
              </h2>
              <p className="max-w-[413px] text-center text-grey-50 mb-10">
                We couldn&apos;t process your request right now. Please try again in a moment.
              </p>
              <Button
                onClick={() => setStatus("idle")}
                label="Try Again"
                variant={buttonVariants[bgVariant] || buttonVariants.blue}
                icon="tabler:arrow-right"
              />
          </div>
        )}
      </div>
    </section>
  );
}
