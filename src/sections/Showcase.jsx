import React, { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Showcase() {
  const sectionRef = useRef(null);

  const gridItems = [
    { id: 1, text: "Python Dev" },
    { id: 2, text: "JavaScript" },
    { id: 3, text: "Frontend" },
    { id: 4, text: "Back End" },
    { id: 5, text: "iOS Development" },
    { id: 6, text: "+12" },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.from(".gsap-text-content", {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })

        .from(
          ".gsap-image-container",
          {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        )

        .from(
          ".gsap-feedback-card",
          {
            xPercent: 22,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.7",
        )

        .from(
          ".gsap-grid-item",
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.8",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-0 sm:px-4 md:px-16 lg:px-32 py-12 md:py-18 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="gsap-text-content flex flex-col items-start text-left lg:mt-20 px-4 sm:px-0">
          <Button variant="default" className="mb-6 px-6 pointer-events-none">
            Custom Profile
          </Button>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-6 leading-tight">
            Showcase Your Talents
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-[340px]">
            RemoteRecruit connects candidates with opportunities around the
            world. With today's remote first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be.
          </p>
        </div>

        <div className="gsap-image-container relative w-full min-h-[450px] flex items-center justify-center">
          <div className="relative w-full sm:max-w-[420px] bg-transparent sm:bg-white rounded-none sm:rounded-2xl sm:shadow-2xl sm:shadow-sky-100 sm:border sm:border-gray-100 overflow-visible p-0 sm:p-3 sm:pb-8 flex flex-col gap-6">
            <div className="absolute -left-[30px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3ea3ca] to-[#1E3E85] border border-[#50C0E3] hidden sm:block"></div>

            <div className="absolute top-1/2 -right-[40px] md:-right-[40px] -translate-y-1/2 w-15 h-15 rounded-full flex items-center justify-center z-20 hidden sm:flex overflow-hidden">
              <div className="w-full h-full rounded-full p-[5px] bg-gradient-to-r from-[#1b6fc4] to-[#1E3E85]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="./developer.webp"
                    alt="Floating Logo"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-44 rounded-none sm:rounded-xl overflow-hidden relative shadow-[0_-12px_20px_-4px_rgba(224,242,254,1),0_12px_20px_-4px_rgba(224,242,254,1)] sm:shadow-none">
              <img
                src="./img1.webp"
                alt="Global Team"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-4 relative w-full px-4 sm:px-0">
              <div className="gsap-feedback-card w-full bg-white rounded-full p-1 shadow-xl border border-[#f6f4ff] flex items-center gap-4 sm:translate-x-[-22%]">
                <div className="w-12 h-12 rounded-full p-[3px] bg-gradient-to-r from-[#FFED43] to-[#F29939] flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="./developer.webp"
                      alt="User 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pr-4 min-w-0">
                  <h4 className="text-xs font-semibold text-[#1E3E85] truncate">
                    Past Client Feedback
                  </h4>
                  <p className="text-sm text-[#11142D] font-medium truncate">
                    Best Developer Ever!
                  </p>
                </div>
              </div>

              <div className="w-full rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
                  {gridItems.map((item) => (
                    <div
                      key={item.id}
                      className="gsap-grid-item w-full bg-gray-100 rounded-lg py-2 text-center text-[13px] font-medium text-[#336DA6] flex items-center justify-center truncate px-2"
                    >
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
