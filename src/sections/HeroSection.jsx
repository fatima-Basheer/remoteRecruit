import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";

gsap.registerPlugin(useGSAP);

function HeroSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".nav-anim", {
        y: -30,
        opacity: 0,
        duration: 1,
      })

        .from(
          ".hero-anim",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=0.6",
        );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: "url('/Background.svg')" }}
    >
      <nav className="nav-anim relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between opacity-100">
        <div className="text-white font-bold text-2xl tracking-wider cursor-pointer flex-shrink-0">
          <img src="./Logo.png" alt="Logo" className="h-7 sm:h-10 w-auto" />
        </div>

        <div className="flex gap-2 sm:gap-4">
          <Button
            variant="secondary"
            className="px-3 py-1.5 text-sm sm:px-5 sm:py-2"
          >
            Sign In
          </Button>
          <Button
            variant="primary"
            className="px-3 py-1.5 text-sm sm:px-5 sm:py-2"
          >
            Sign Up
          </Button>
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-3xl mx-auto py-12">
        <h1 className="hero-anim text-2xl sm:text-3xl md:text-[45px] font-bold text-white mb-4 leading-tight tracking-tight">
          RemoteRecruit's Difference
        </h1>

        <p className="hero-anim text-sm sm:text-[17px] text-gray-200 leading-relaxed max-w-[620px]">
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, no
          barriers, there's nothing but you, your talents, and the next step in
          the career.
        </p>
      </main>

      <div className="h-6 sm:h-10 relative z-10 block"></div>
    </div>
  );
}

export default HeroSection;
