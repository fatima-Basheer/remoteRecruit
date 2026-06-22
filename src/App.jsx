import React, { useState, useEffect, Suspense, lazy } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./App.css";
import HeroSection from "./sections/HeroSection";
const GlobalReach = lazy(() => import("./sections/GlobalReach"));
const Premium = lazy(() => import("./sections/Premium"));
const Showcase = lazy(() => import("./sections/Showcase"));
const HelpInClicks = lazy(() => import("./sections/HelpInClicks"));
const Questions = lazy(() => import("./sections/Questions"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeroSection />

      <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
        <GlobalReach />
        <Premium />
        <Showcase />
        <HelpInClicks />
        <Questions />
        <Footer />
      </Suspense>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-5 z-50 p-3 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] text-white shadow-xl cursor-pointer
          transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 flex items-center justify-center
          ${showScrollButton ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}

export default App;
