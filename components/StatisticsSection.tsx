"use client";

interface StatisticItemProps {
  icon: string;
  number: string;
  label: string;
}

function StatisticItem({ icon, number, label }: StatisticItemProps) {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      {/* Icon */}
      <div className="flex items-center justify-center">
        <img
          src={icon}
          alt={label}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </div>
      
      {/* Number */}
      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#FACC15] leading-none">
        {number}
      </div>
      
      {/* Label */}
      <div className="text-base md:text-lg lg:text-xl text-[#FACC15] text-center">
        {label}
      </div>
    </div>
  );
}

export default function StatisticsSection() {
  const statistics: StatisticItemProps[] = [
    {
      icon: "/assets/icons/heart-circle-sharp.svg",
      number: "195",
      label: "user countries",
    },
    {
      icon: "/assets/icons/diamond.svg",
      number: "1M",
      label: "valued teachers",
    },
    {
      icon: "/assets/icons/school.svg",
      number: "17M",
      label: "happy students",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-16 xl:gap-24">
          {statistics.map((stat, index) => (
            <StatisticItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

