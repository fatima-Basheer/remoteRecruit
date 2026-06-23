import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center pt-16 overflow-hidden min-h-[60vh] bg-gray-50/50">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 z-10 text-center px-4">
        Help Is One Click Away
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 px-4 w-full max-w-5xl">
        <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full flex-1 hover:-translate-y-1 transition-transform duration-700">
          <div className="flex flex-col sm:flex-row gap-6 mb-8 flex-1">
            <div className="w-full sm:w-2/5 bg-[#ecf2ff] rounded-xl flex flex-col items-center justify-center py-6 px-2 min-h-[140px]">
              <p className="text-[#52B4DA] text-3xl text-center font-bold">
                Free
              </p>
              <p className="text-gray-500 text-sm text-center mt-1">Basic</p>
            </div>

            <div className="w-full sm:w-3/5 flex flex-col justify-center">
              <ul className="space-y-3.5 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                  <span className="font-semibold text-sm">1 Active Job</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                  <span className="font-semibold text-sm">
                    Basic List Placement
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                  <span className="font-semibold text-sm">
                    Featured Listing
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#828283] to-[#767677] flex-shrink-0" />
                  <span className="font-semibold text-gray-400 text-sm">
                    Unlimited Job Applicants
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#828283] to-[#767677] flex-shrink-0" />
                  <span className="font-semibold text-gray-400 text-sm">
                    Invite Anyone to Apply
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <button className="w-full mt-auto text-[#1E3E85] font-bold py-3.5 px-4 rounded-xl border-2 border-[#1E3E85] hover:bg-[#1E3E85] hover:text-white transition-all duration-300">
            Get Started
          </button>
        </div>

        <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full flex-1 hover:-translate-y-1 transition-transform duration-700 border-2 border-transparent hover:border-sky-100">
          <div className="flex flex-col sm:flex-row gap-6 mb-8 flex-1">
            <div className="w-full sm:w-2/5 bg-[#ecf2ff] rounded-xl flex flex-col items-center justify-center py-6 px-2 min-h-[140px] relative mt-4 sm:mt-0">
              <div className="flex justify-center items-center gap-1.5 absolute -top-5 left-1/2 -translate-x-1/2 bg-sky-300 text-black font-semibold px-4 py-1 text-xs md:text-sm rounded-full shadow-md whitespace-nowrap">
                <div className="h-4 w-4 rounded-full bg-white"></div>
                Premium
              </div>

              <p className="text-[#52B4DA] text-3xl text-center font-bold mt-2">
                $79.99
              </p>
              <p className="text-gray-500 text-sm text-center mt-1">
                Per Month
              </p>
            </div>

            <div className="w-full sm:w-3/5 flex flex-col justify-center">
              <ul className="space-y-3.5 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                  <span className="font-semibold text-sm">10 Active Jobs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                  <span className="font-semibold text-sm">
                    Premium Placement
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                  <span className="font-semibold text-sm">
                    Unlimited Applicants
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex-shrink-0" />
                  <span className="font-semibold text-sm">Premium Listing</span>
                </li>
              </ul>
            </div>
          </div>

          <button className="w-full mt-auto bg-[#1E3E85] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-[#152e66] transition-all duration-700">
            Get Started
          </button>
        </div>
      </div>

      <div className="relative w-full pt-40 md:pt-48 mt-[-100px] md:mt-[-150px] z-0 flex flex-col">
        <div className="absolute inset-0 -z-10">
          <img
            src="./Footer.png"
            alt="Footer Background"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="w-full max-w-5xl mx-auto px-6 mt-auto mt-6 md:my-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src="./Logo.png" alt="Logo" className="h-10 md:h-12 w-auto" />

            <div className="flex items-center gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-sky-200/20 hover:bg-[#1E3E85] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="relative w-full mt-10">
          <div className="w-full h-[1px] shadow-sm bg-white/30 opacity-60" />

          <div className="flex justify-center h-15">
            <img
              src="./Group 132.webp"
              alt="Bottom Decoration"
              className="h-[100px] w-auto object-contain leading-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
