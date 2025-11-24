"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    author: "Hellen Jummy",
    role: "Financial Counselor",
    image: "/assets/images/profileImg1.jpg",
  },
  {
    text: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    author: "Ralph Edwards",
    role: "Math Teacher",
    image: "/assets/images/profileImg2.jpg",
  },
  {
    text: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    author: "Hellena John",
    role: "Psychology Student",
    image: "/assets/images/profileImg3.jpg",
  },
];

export default function TestimonialsSection() {
  // Create infinite array by repeating testimonials multiple times
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(testimonials.length * 2); // Start in the middle section
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(100); // Percentage per card

  useEffect(() => {
    // Calculate card width based on screen size
    const updateCardWidth = () => {
      if (window.innerWidth >= 1024) {
        setCardWidth(33.333); // lg: 3 cards visible
      } else if (window.innerWidth >= 768) {
        setCardWidth(50); // md: 2 cards visible
      } else {
        setCardWidth(100); // mobile: 1 card visible
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  useEffect(() => {
    // Handle infinite loop - reset position without animation when at boundaries
    if (currentIndex >= infiniteTestimonials.length - testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length * 2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length * 2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, infiniteTestimonials.length, testimonials.length]);

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Calculate the actual index for indicators (0 to testimonials.length - 1)
  const actualIndex = currentIndex % testimonials.length;

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header with Title and Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 md:mb-16">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
            What everyone says
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center hover:opacity-70 transition-opacity group"
              aria-label="Previous testimonial"
            >
              <img
                src="/assets/icons/arrowBtn.svg"
                alt="Previous"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transform rotate-180 group-hover:scale-110 transition-transform"
              />
            </button>
            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center hover:opacity-70 transition-opacity group"
              aria-label="Next testimonial"
            >
              <img
                src="/assets/icons/arrowBtn.svg"
                alt="Next"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Carousel Container - Shows multiple cards side by side */}
        <div className="relative overflow-x-hidden overflow-y-visible py-4">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{
              transform: `translateX(calc(-${currentIndex} * ${cardWidth}%))`,
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={`${index}-${testimonial.author}`}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 md:px-3 lg:px-4"
              >
                <div className="bg-white rounded-lg md:rounded-xl p-6 md:p-8 lg:p-10 shadow-lg h-full">
                  {/* Testimonial Text */}
                  <p className="text-[#0F172A] text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-[#0F172A] font-bold text-base md:text-lg">
                        {testimonial.author}
                      </h3>
                      <p className="text-[#475569] text-sm md:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(testimonials.length * 2 + index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === actualIndex
                  ? "bg-[#EA580C] w-8"
                  : "bg-[#CBD5E1] w-2 hover:bg-[#94A3B8]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
