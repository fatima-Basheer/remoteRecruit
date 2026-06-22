import React, { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function GlobalReach() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.from(".text-content", {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        clearProps: "all",
      })
        .from(
          ".image-content",
          {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.5",
        )
        .from(
          ".profile-card-1",
          {
            xPercent: 22,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.7",
        )
        .from(
          ".profile-card-2",
          {
            xPercent: -10,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.8",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-0 sm:px-4 md:px-16 lg:px-32 py-8 md:py-12 lg:py-18 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-content flex flex-col items-start text-left lg:mt-20 px-4 sm:px-0">
          <Button variant="default" className="mb-6 px-6 pointer-events-none">
            Global Reach
          </Button>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-6 leading-tight">
            The First Fully Global Job Board, Anywhere, Ever
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-[340px]">
            RemoteRecruit connects candidates with opportunities around the
            world. With today's remote first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be.
          </p>
        </div>

        <div className="image-content relative w-full min-h-[450px] flex items-center justify-center">
          <div className="relative w-full sm:max-w-[420px] bg-transparent sm:bg-white rounded-none sm:rounded-2xl sm:shadow-2xl sm:shadow-sky-100 sm:border sm:border-gray-100 overflow-visible p-0 sm:p-3 sm:pb-8 flex flex-col gap-6">
            <div className="absolute -left-[30px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#3ea3ca] to-[#1E3E85] border border-[#50C0E3] hidden sm:block"></div>

            <div className="absolute top-1/2 md:-right-[60px] -translate-y-1/2 w-30 h-30 rounded-full flex items-center justify-center z-20 hidden sm:flex overflow-hidden">
              <img
                src="./Group 132.webp"
                alt="Floating Logo"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="w-full h-44 sm:h-44 rounded-none sm:rounded-xl overflow-hidden relative shadow-[0_-12px_20px_-4px_rgba(224,242,254,1),0_12px_20px_-4px_rgba(224,242,254,1)] sm:shadow-none">
              <img
                src="./img1.webp"
                alt="Global Team"
                className="w-full h-full object-cover object-top relative z-0"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex flex-col gap-4 relative w-full px-4 sm:px-0">
              <div className="profile-card-1 w-full bg-white rounded-full p-1 shadow-xl border border-[#f6f4ff] flex items-center gap-4 relative sm:left-[-22%]">
                <div className="w-12 h-12 rounded-full p-[3px] bg-gradient-to-r from-[#FFED43] to-[#F29939] flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="./developer.webp"
                      alt="User 1"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="pr-4 min-w-0">
                  <h4 className="text-xs font-semibold text-[#1E3E85] truncate">
                    Python Developer
                  </h4>
                  <p className="text-sm text-[#11142D] font-medium truncate">
                    Felonious Gru.
                  </p>
                </div>
              </div>

              <div className="profile-card-2 w-full bg-white rounded-full p-1 shadow-xl border border-[#f6f4ff] flex items-center gap-4 relative sm:left-[10%]">
                <div className="w-12 h-12 rounded-full p-[3px] bg-gradient-to-r from-[#FFED43] to-[#F29939] flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="./developer.webp"
                      alt="User 2"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="pr-4 min-w-0">
                  <h4 className="text-xs font-semibold text-[#52B4DA] truncate">
                    Frontend Wizard
                  </h4>
                  <p className="text-sm font-medium text-[#11142D] truncate">
                    Mel muselphiem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalReach;
