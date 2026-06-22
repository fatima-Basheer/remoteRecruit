import React, { useRef } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 

gsap.registerPlugin(ScrollTrigger);

function HelpInClicks() {
  const sectionRef = useRef(null);

  useGSAP(() => {
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true, 
      },
    });

    tl.from(".gsap-ball", {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
      .from(".gsap-image", {
        y: 80,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
      }, "-=0.8")
      .from(".gsap-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.08, 
        ease: "power3.out",
      }, "-=1.2")
      .from(".gsap-btn-wrapper", { 
        y: 25,
        scale: 0.9,
        opacity: 0,
        duration: 0.45,
        ease: "back.out(1.7)",
      }, "-=0.6");
      
  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[500px] bg-gradient-to-br from-[#5799EB]/20 to-[#9F74FB]/20 flex items-center overflow-hidden 2xl:px-80"
    >
      <div className="w-full max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-2 gap-0 lg:gap-12">
        <div className="relative flex items-end justify-center lg:justify-start min-h-[400px] lg:min-h-[550px] w-full mt-4 lg:mt-0">
          
    
          <div className="gsap-ball hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#FFED43] to-[#F29939] opacity-90 z-10 shadow-lg"/>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden flex items-end">
      
            <div className="gsap-image w-full">
              <div className="w-full bg-transparent lg:bg-white pt-0 lg:pt-[15px] pr-0 lg:pr-[15px] translate-y-0 lg:translate-y-[35%] rounded-none lg:rounded-tr-[2.5rem]">
                <img
                  src="./img.png"
                  alt="Help Illustration"
                  loading="lazy"
                  decoding="async"
                  className="block w-full max-w-full h-auto object-cover lg:object-contain object-bottom lg:object-left-bottom rounded-none lg:rounded-tr-[2.5rem]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-30 w-full px-6 sm:px-12 lg:px-0 lg:pr-24 pt-16 lg:pt-32 pb-4 lg:pb-0 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[650px]">
          <div className="flex flex-col items-center lg:items-start w-full">
            
          
            <p className="gsap-text text-xs font-semibold tracking-wider text-[#1E3E85] uppercase">
              Are you ready?
            </p>
            <h2 className="gsap-text text-3xl sm:text-4xl 2xl:text-5xl leading-[1.2] font-semibold text-black mt-3 max-w-[350px]">
              Help is only a few clicks away!
            </h2>
            <p className="gsap-text text-base text-gray-500 mt-5 max-w-[280px]">
              Click Below to get set up super quickly and find help now!
            </p>

          
            <div className="gsap-btn-wrapper mt-8">
              <div className="relative z-50 inline-flex items-center gap-2 px-2 text-[14px] pr-4 py-2.5 font-semibold rounded-full bg-sky-100 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 transform cursor-pointer group">
                <FaCircleArrowRight className="text-3xl text-[#52B4DA] bg-[#ffffff] rounded-full transition-transform duration-500 group-hover:translate-x-1 group-active:translate-x-2" />
                <span className="text-[#1E3E85]">Get Started</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpInClicks;