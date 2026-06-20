import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import HeroSection from "./sections/HeroSection";
import GlobalReach from "./sections/GlobalReach";
import Premium from "./sections/Premium";
import Showcase from "./sections/Showcase";
import HelpInClicks from "./sections/HelpInClicks";
import Questions from "./sections/Questions";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0);
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

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeroSection />
      <GlobalReach />
      <Premium />
      <Showcase />
      <HelpInClicks />
      <Questions />
      <Footer />

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
