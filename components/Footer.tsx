"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Top Section - Logo and Navigation */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
          {/* Logo */}
          <div className="flex items-center md:items-start">
            <div className="flex items-center">
              <img
                src="/assets/svgs/footer_teach_logo.svg"
                alt="uteach logo"
                width={21}
                height={23}
                className="mr-2"
              />
              <span className="text-white text-xl md:text-2xl font-normal">
                teach
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 lg:gap-12 flex-1">
            {/* Product Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                Product
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Browse
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                    >
                      Accessibility
                    </a>
                    <span className="bg-[#F3E8FF] text-[#6B21A8] text-xs font-normal uppercase px-2 py-0.5 rounded">
                      BETA
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                Solutions
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Brainstorming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Ideation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Wireframing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                Resources
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                Support
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal flex items-center gap-1"
                  >
                    Request Demo
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-[#E2E8F0]/20 mb-6 md:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <p className="text-white text-sm md:text-base font-normal">
              uteach @ 2023. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="#"
                className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white hover:text-[#E2E8F0] transition-colors text-sm md:text-base font-normal"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Language/Currency Selectors */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/assets/icons/world.svg"
                alt="Language"
                width={24}
                height={24}
              />
              <span className="text-white text-sm md:text-base font-normal">
                EN
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/assets/icons/euro.svg"
                alt="Currency"
                width={24}
                height={24}
              />
              <span className="text-white text-sm md:text-base font-normal">
                EUR
              </span>
            </div>
            <img
              src="/assets/icons/accessibility.svg"
              alt="Accessibility"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

