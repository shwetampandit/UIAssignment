"use client";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
          {/* Left Section */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Headline */}
            <h1 className="text-[72px] md:text-5xl lg:text-6xl font-[800] leading-tight text-[#0F172A]">
              <span className="relative inline-block">
                <span className="text-[#0F172A]">Teach</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#2563EB] -z-10"></span>
              </span>{" "}
              <span className="text-[#0F172A]">students</span>{" "}
              <span className="text-[#0F172A]">worldwide</span>
            </h1>

            {/* Paragraph */}
            <div className="flex flex-col gap-2 text-[#0F172A] text-2xl md:text-2xl leading-relaxed">
              <p>Amet nunc diam orci duis ut sit diam arcu, nec.</p>
              <p>Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
              <p>Nunc ipsum est pellentesque turpis ultricies.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center">
              <button className="px-10 md:px-10 py-3 md:py-4 bg-[#EA580C] text-white rounded-md hover:bg-[#EA580C]/90 transition-colors text-2xl md:text-lg font-[700]">
                Sign Up Now
              </button>
              <a
                href="#"
                className="flex items-center gap-2 text-[#2563EB] hover:text-[#475569] transition-colors text-base md:text-lg font-normal"
              >
                <img
                  src="/assets/icons/play-circle.svg"
                  alt="Play"
                  width={24}
                  height={24}
                />
                View Demo
              </a>
            </div>

            {/* Trusted by Companies */}
            <div className="flex flex-row items-center gap-8 pt-4">
              <p className="text-[#475569] w-[30%] text-sm md:text-base font-normal">
                Trusted by <br /> leading companies
              </p>
              <div className="w-[70%] flex flex-wrap items-center gap-4 md:gap-6">
                <img
                  src="/assets/icons/Black and White Collection 1.svg"
                  alt="Company 1"
                  width={32}
                  height={32}
                  className="opacity-70"
                />
                <img
                  src="/assets/icons/Black and White Collection 2.svg"
                  alt="Company 2"
                  width={32}
                  height={32}
                  className="opacity-70"
                />
                <img
                  src="/assets/icons/Black and White Collection 3.svg"
                  alt="Company 3"
                  width={32}
                  height={32}
                  className="opacity-70"
                />
                <img
                  src="/assets/icons/Black and White Collection 11.svg"
                  alt="Company 4"
                  width={32}
                  height={32}
                  className="opacity-70"
                />
                <img
                  src="/assets/icons/Black and White Collection 20.svg"
                  alt="Company 5"
                  width={32}
                  height={32}
                  className="opacity-70"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-full flex items-center justify-center lg:justify-end lg:overflow-visible">
            {/* Desktop Image */}
            <img
              src="/assets/svgs/TeacherStudent.svg"
              alt="Teacher and Student"
              className="hidden lg:block w-[500px] lg:w-[600px] xl:w-[700px] object-contain"
            />
            {/* Mobile Image */}
            <img
              src="/assets/svgs/teacherstudent_mobile.svg"
              alt="Teacher and Student"
              className="lg:hidden w-full max-w-sm object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

