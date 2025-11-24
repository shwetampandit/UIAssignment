"use client";

import { useState } from "react";

export default function ToolsSection() {
  const [selectedIcon, setSelectedIcon] = useState(1); // Google Drive is selected by default

  const appIcons = [
    { id: 0, src: "/assets/icons/App-icon.svg", alt: "Google Classroom" },
    { id: 1, src: "/assets/icons/App-icon (1).svg", alt: "Google Drive" },
    { id: 2, src: "/assets/icons/App-icon (2).svg", alt: "Google" },
    { id: 3, src: "/assets/icons/App-icon (3).svg", alt: "Camera" },
    { id: 4, src: "/assets/icons/App-icon (4).svg", alt: "Infinity" },
    { id: 5, src: "/assets/icons/App-icon (5).svg", alt: "Calendar" },
    { id: 6, src: "/assets/icons/App-icon (6).svg", alt: "Chart" },
    { id: 7, src: "/assets/icons/App-icon (7).svg", alt: "WiFi" },
  ];

  return (
    <section
      id="tools"
      className="w-full bg-[#F8F9FA] relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Background SVGs - 50/50 split */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex">
        {/* Left Background - 50% of section */}
        <div className="w-1/2 h-full relative flex items-end justify-start">
          <img
            src="/assets/svgs/Section2BgLeft.svg"
            alt=""
            className="w-[55%] h-[55%] object-contain opacity-100 -translate-x-6"
          />
        </div>
        {/* Right Background - 50% of section */}
        <div className="w-1/2 h-full relative flex items-start justify-end">
          <img
            src="/assets/svgs/Section2BgRight.svg"
            alt=""
            className="w-[55%] h-[55%] object-contain opacity-100 translate-x-6"
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4 md:mb-6">
            All the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">tools</span>
              <span className="absolute bottom-1 left-0 right-0 h-4 bg-[#FB923C] -z-0 opacity-70 rounded-sm"></span>
            </span>{" "}
            that you need
          </h2>
          <div className="text-[#0F172A] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            <p className="mb-2">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris.
            </p>
            <p>
              Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
            </p>
          </div>
        </div>

        {/* Browser Window and Icons Section */}
        <div className="relative flex flex-col items-center">
          {/* Browser Window */}
          <div className="relative z-20 mb-4 md:mb-6 lg:mb-8">
            <img
              src="/assets/svgs/Desktop.svg"
              alt="Browser Window"
              className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto drop-shadow-lg"
            />
          </div>

          {/* Connecting Lines - positioned to connect browser to icons */}
          <div className="relative z-10 w-full max-w-6xl mx-auto mb-6 md:mb-8 lg:mb-10 -mt-4 md:-mt-6 lg:-mt-8">
            <img
              src="/assets/svgs/Lines.svg"
              alt="Connecting Lines"
              className="w-full h-auto"
            />
          </div>

          {/* App Icons */}
          <div className="relative z-20 flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6">
            {appIcons.map((icon) => (
              <button
                key={icon.id}
                onClick={() => setSelectedIcon(icon.id)}
                className={`relative transition-all duration-300 ${
                  selectedIcon === icon.id
                    ? "scale-110"
                    : "hover:scale-105"
                }`}
                aria-label={icon.alt}
              >
                <div
                  className={`p-1 rounded-lg transition-all duration-300 ${
                    selectedIcon === icon.id
                      ? "border-2 border-[#FB923C] shadow-lg"
                      : "border-2 border-transparent"
                  }`}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

