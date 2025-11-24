"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#475569]/20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/svgs/header_teach_logo.svg"
              alt="uteach logo"
              width={21}
              height={23}
              className="mr-2"
            />
            <span className="text-[#0F172A] text-xl md:text-2xl font-normal">
              teach
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("tools")}
              className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal"
            >
              Products
            </button>
            <a
              href="#"
              className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal"
            >
              Pricing
            </a>
            <div className="relative group">
              <a
                href="#"
                className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal flex items-center gap-1"
              >
                Resources
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-[#475569]"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-[#0F172A] hover:text-[#475569] transition-colors text-base font-normal"
            >
              Log In
            </a>
            <button className="px-6 py-2 border border-[#475569] rounded-md text-[#0F172A] hover:border-[#0F172A] transition-colors text-base font-normal">
              Sign Up Now
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden text-[#475569]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#475569]/20">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("tools")}
                className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal text-left"
              >
                Products
              </button>
              <a
                href="#"
                className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal"
              >
                Resources
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#475569]/20">
                <a
                  href="#"
                  className="text-[#475569] hover:text-[#0F172A] transition-colors text-base font-normal"
                >
                  Log In
                </a>
                <button className="w-full px-6 py-2 border border-[#475569] rounded-md text-[#0F172A] hover:border-[#0F172A] transition-colors text-base font-normal text-left">
                  Sign Up Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

