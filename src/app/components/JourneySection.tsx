import React from "react";
import { TIMELINE } from "../constants/homePageConstant";
import { FiChevronDown } from "react-icons/fi";
import { useSectionContext } from "../context/SectionContext";

export default function JourneySection() {
  const { expandedSection, toggleSection } = useSectionContext();
  const isExpanded = expandedSection === 'journey';

  const handleToggle = () => {
    toggleSection('journey');
  };

  return (
    <section id="journey" className="w-full py-8 lg:py-16 flex lg:items-center items-start justify-center relative overflow-hidden">
      <div className="w-full lg:max-w-6xl max-w-full">
        {/* Collapsible Header */}
        <div
          className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] w-full"
          onClick={handleToggle}
        >
          <div className="block">
            <div className="flex-1 lg:flex-none text-left lg:text-left">
              <div className="flex items-center justify-between">
                <h2 className="font-light text-xl lg:text-4xl mb-4 tracking-wide">
                  Timeline / Journey
                </h2>
                <div
                  className={`transition-all duration-600 ease-out transform ${
                    isExpanded ? "rotate-180 scale-110" : "rotate-0 scale-100"
                  } group-hover:scale-110`}
                >
                  <div className="">
                    <FiChevronDown className="text-xl lg:text-2xl text-black" />
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-black/10"></div>
            </div>
          </div>
        </div>

        {/* Collapsible Content */}
        <div
          className={`overflow-hidden transition-all duration-800 ease-out ${
            isExpanded
              ? "max-h-[3000px] opacity-100 mt-12 lg:mt-20"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl lg:ml-5 flex">
            {/* Vertical timeline line */}
            <div
              className="absolute lg:left-7 left-7 top-3 bottom-0 w-[2px] bg-gradient-to-b from-black/20 via-black/60 to-black/20 rounded-full z-0"
              style={{ transform: "translateX(-50%)" }}
            />
            <ul className="flex flex-col gap-16 w-full relative z-10">
              {TIMELINE.map((item, index) => (
                <li key={item.year} className="relative flex items-start">
                  {/* Year badge on the line */}
                  <div className="absolute left-0 lg:top-3 top-0 z-20 flex flex-col items-center">
                    <span className="rounded-full border-2 border-black/20 bg-white w-14 h-14 flex items-center justify-center text-black font-light text-base shadow-lg relative">
                      {item.year}
                      <span className="absolute inset-0 rounded-full lg:animate-ping animate-none lg:bg-black/20 bg-transparent"></span>
                    </span>
                  </div>
                  {/* Card */}
                  <div className="ml-18 lg:ml-24 flex-1">
                    <div
                      className="backdrop-blur-xl bg-black/5 border border-black/20 rounded px-6 lg:py-6 py-4 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black/10"
                      style={{
                        animationDelay: `${index * 150}ms`,
                        animation: isExpanded
                          ? "slideInUp 0.6s ease-out forwards"
                          : "none",
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded
                          ? "translateY(0)"
                          : "translateY(20px)",
                      }}
                    >
                      <span className="lg:text-lg text-base font-light tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
