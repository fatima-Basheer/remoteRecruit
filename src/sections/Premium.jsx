import React, { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // 1. Import useGSAP

gsap.registerPlugin(ScrollTrigger);

function Premium() {
  const sectionRef = useRef(null);

  const features = [
    "Up to 25 active job posts",
    "Premium Placement & visibility",
    "Messaging anyone, unlimited",
    "Unlimited invites",
    "View all applicants",
    "Unlimited Invites to jobseekers",
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      tl.from(".gsap-left-card", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })

        .from(
          ".gsap-payment-card",
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.7",
        )

        .from(
          ".gsap-right-text",
          {
            y: 32,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=1",
        );

      const handleResize = () => {
        ScrollTrigger.refresh(true);
        gsap.set(".gsap-payment-card", { clearProps: "transform" });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-12 md:px-16 lg:px-32 md:py-18 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="gsap-left-card relative flex items-center justify-center w-full min-h-0 md:min-h-[450px]">
          <div className="relative w-full sm:w-[75%] bg-white rounded-2xl border border-gray-100 p-3 shadow-2xl shadow-sky-100 overflow-visible">
            <div className="absolute -left-[30px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3ea3ca] to-[#1E3E85] border border-[#50C0E3] hidden sm:block"></div>

            <div className="absolute top-1/2 -right-[40px] md:-right-[60px] -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center z-20 hidden sm:flex overflow-hidden">
              <img
                src="./Group 132.webp"
                alt="Floating Logo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-3 pb-6">
              <p className="text-xs text-gray-500 mt-2">Your Membership Tier</p>
              <h3 className="text-2xl font-semibold mt-2 bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent">
                Premium
              </h3>
              <p className="uppercase text-gray-600 text-[10px] font-medium my-3">
                Features
              </p>

              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 relative w-full mt-5">
                <div className="gsap-payment-card w-full bg-white rounded-full p-1 shadow-xl border border-[#f6f4ff] flex items-center gap-4 sm:translate-x-[-22%]">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden border-2 border-sky-300">
                    <img
                      src="./developer.webp"
                      alt="User 1"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="pr-4 min-w-0">
                    <h4 className="text-[10px] font-semibold text-[#1E3E85] truncate">
                      Upcoming payments
                    </h4>
                    <p className="text-sm text-[#11142D] font-semibold line-clamp-1">
                      14 Days-$79.99
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gsap-right-text flex flex-col items-start text-left justify-center lg:mt-0">
          <Button variant="default" className="mb-6 px-6 pointer-events-none">
            Actually Fee Free
          </Button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-4 sm:mb-6 leading-tight">
            Fee-Free Forever
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-[520px]">
            We don't charge you fees and we don't put up paywalls. We are the
            bridge that connects job opportunities with the best candidates,
            with no middleman involved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Premium;
