import React, { useEffect, useRef } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HelpInClicks() {
  const sectionRef = useRef(null);
  const ballRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",

          toggleActions: "play none none none",

          once: true,
        },
      });

      tl.from(ballRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })

        .from(
          imageRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1.8,
            ease: "power3.out",
          },
          "-=0.8",
        )

        .fromTo(
          Array.from(textRef.current.children).slice(0, 3),
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=1.2",
        )

        .fromTo(
          buttonRef.current,
          {
            y: 25,
            scale: 0.9,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[500px] bg-gradient-to-br from-[#5799EB]/20 to-[#9F74FB]/20 flex items-center overflow-hidden 2xl:px-80"
    >
      <div className="w-full max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-2 gap-0 lg:gap-12">
        <div className="relative flex items-end justify-center lg:justify-start min-h-[400px] lg:min-h-[550px] w-full mt-4 lg:mt-0">
          <div
            ref={ballRef}
            className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#FFED43] to-[#F29939] opacity-90 z-10 shadow-lg"
          />

          <div className="absolute bottom-0 left-0 w-full overflow-hidden flex items-end">
            <div ref={imageRef} className="w-full">
              <div className="w-full bg-transparent lg:bg-white pt-0 lg:pt-[15px] pr-0 lg:pr-[15px] translate-y-0 lg:translate-y-[35%] rounded-none lg:rounded-tr-[2.5rem]">
                <img
                  src="./img.png"
                  alt="Help Illustration"
                  className="block w-full max-w-full h-auto object-cover lg:object-contain object-bottom lg:object-left-bottom rounded-none lg:rounded-tr-[2.5rem]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-30 w-full px-6 sm:px-12 lg:px-0 lg:pr-24 pt-16 lg:pt-32 pb-4 lg:pb-0 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[650px]">
          <div
            ref={textRef}
            className="flex flex-col items-center lg:items-start w-full"
          >
            <p className="text-xs font-semibold tracking-wider text-[#1E3E85] uppercase">
              Are you ready?
            </p>

            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl leading-[1.2] font-semibold text-black mt-3 max-w-[350px]">
              Help is only a few clicks away!
            </h2>

            <p className="text-base text-gray-500 mt-5 max-w-[280px]">
              Click Below to get set up super quickly and find help now!
            </p>

            <div
              ref={buttonRef}
              className="relative z-50 inline-flex items-center gap-2 px-2 text-[14px] pr-4 py-2.5 mt-8 font-semibold rounded-full bg-sky-100 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 transform cursor-pointer group"
            >
              <FaCircleArrowRight className="text-3xl text-[#52B4DA] bg-[#ffffff] rounded-full transition-transform duration-500 group-hover:translate-x-1 group-active:translate-x-2" />
              <span className="text-[#1E3E85]">Get Started</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpInClicks;
