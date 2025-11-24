"use client";

export default function InternationalSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Section - Image Collage */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/assets/svgs/Col.svg"
              alt="Students and Teachers Collage"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 lg:w-1/2">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[black] leading-tight text-center lg:text-left">
              Meet{" "}
              <span className="relative inline-block">
                <img
                  src="/assets/icons/Aeroplane Icon.svg"
                  alt="Airplane"
                  className="absolute -top-4 right-[12px] md:-top-6 md:right-[14px] lg:-top-8 lg:right-[14px] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
                international
              </span>{" "}
              students & teachers
            </h2>

            {/* Body Text */}
            <p className="text-[#475569] text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
            </p>

            {/* Call to Action */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] transition-colors text-base md:text-lg font-medium group"
              >
                Explore teachers and students
                <img
                  src="/assets/icons/arrow-right.svg"
                  alt="Arrow right"
                  width={20}
                  height={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

