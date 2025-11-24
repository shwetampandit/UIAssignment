"use client";

interface FeatureItemProps {
  text: string;
}

interface LessonCardProps {
  label: string;
  labelColor: string;
  title: string;
  description: string;
  colSpan?: string;
}

const features = [
  "Est et in pharetra magna adipiscing ornare aliquam.",
  "Tellus arcu sed consequat ac velit ut eu blandit.",
  "Ullamcorper ornare in et egestas dolor orci.",
];

const lessonCards: LessonCardProps[] = [
  {
    label: "Featured",
    labelColor: "bg-[#6B21A8]",
    title: "The map of mathematics",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    label: "Popular",
    labelColor: "bg-[#0EA5E9]",
    title: "Design for how people think",
    description: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
  },
  {
    label: "New",
    labelColor: "bg-[#10B981]",
    title: "International & commercial law",
    description: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
];

function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <img
        src="/assets/icons/check.svg"
        alt="Check"
        width={24}
        height={24}
        className="mt-1 flex-shrink-0"
      />
      <p className="text-[#0F172A] text-base md:text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function LessonCard({
  label,
  labelColor,
  title,
  description,
  colSpan = "",
}: LessonCardProps) {
  return (
    <div
      className={`bg-white rounded-lg p-4 md:p-5 shadow-lg border border-[#E2E8F0] flex flex-col gap-3 ${colSpan}`}
    >
      <span
        className={`inline-block w-fit px-3 py-1 rounded-md text-white text-xs font-medium ${labelColor}`}
      >
        {label}
      </span>
      <h3 className="text-lg md:text-xl font-bold text-[#0F172A] leading-tight">
        {title}
      </h3>
      <p className="text-[#475569] text-sm leading-relaxed line-clamp-3">
        {description}
      </p>
      <button className="w-full px-4 py-2 border-2 border-[#2563EB] text-[#2563EB] rounded-md hover:bg-[#2563EB] hover:text-white transition-colors font-medium text-sm">
        Take Lesson
      </button>
    </div>
  );
}

export default function AppSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background SVGs - Right side only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-end">
        <div className="relative w-full h-full flex items-center justify-end">
          <img
            src="/assets/svgs/Screen3bg1.svg"
            alt=""
            className="absolute right-0 top-0 w-[60%] h-[70%] object-contain opacity-100 z-0"
          />
          <img
            src="/assets/svgs/Screen3bg2.svg"
            alt=""
            className="absolute right-0 bottom-0 w-[55%] h-[60%] object-contain opacity-100 z-0"
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left Section - Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 lg:w-1/2">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
              An{" "}
              <span className="relative inline-block">
                <span className="relative z-10">all-in-one</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#EA580C] -z-0 opacity-80 rounded-sm transform -rotate-1"></span>
              </span>{" "}
              app that makes it easier
            </h2>

            {/* Paragraph */}
            <p className="text-[#475569] text-lg md:text-xl leading-relaxed">
              Est et in pharetra magna adipiscing ornare aliquam. Tellus arcu
              sed consequat ac velit ut eu blandit. Ullamcorper ornare in et
              egestas dolor orci.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-4 md:gap-5">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>

            {/* Call to Action */}
            <a
              href="#"
              className="flex items-center gap-2 text-[#2563EB] hover:text-[#1E40AF] transition-colors text-base md:text-lg font-medium mt-2"
            >
              Find more about the app
              <img
                src="/assets/icons/arrow-right.svg"
                alt="Arrow right"
                width={20}
                height={20}
              />
            </a>
          </div>

          {/* Right Section - Desktop Window and Cards */}
          <div className="flex flex-col items-center lg:items-end lg:w-1/2 relative z-20">
            {/* Desktop Window */}
            <div className="relative mb-0 w-full max-w-2xl">
              <img
                src="/assets/svgs/Screen3Desktop.svg"
                alt="App Desktop View"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Content Cards - Overlapping by 35% */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl -mt-[35%] relative z-30">
              {lessonCards.map((card, index) => (
                <LessonCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

