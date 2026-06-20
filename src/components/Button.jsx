import React from "react";

function Button({ children, className = "", variant = "primary", onClick }) {
  const baseStyle =
    "inline-flex items-center justify-center py-2 px-4 text-[14px] font-medium cursor-pointer transition-all duration-300";

  const variants = {
    primary: "bg-[#3db0d3] text-[#F5F7FE] rounded-xl hover:bg-[#50C0E3]",
    secondary:
      "text-[#f5f7fe] border border-transparent hover:border-[#3db0d3] rounded-xl",
    default: "text-[#11142D] rounded-full bg-sky-200",
    outline:
      "text-[#1E3E85] border border-[#3db0d3] hover:text-white hover:bg-[#3db0d3] rounded-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
