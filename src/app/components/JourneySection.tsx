import React from "react";
import { TIMELINE } from "../constants/homePageConstant";
import { FiChevronDown } from "react-icons/fi";
import { useSectionContext } from "../context/SectionContext";

export default function JourneySection() {
  const { expandedSection, toggleSection } = useSectionContext();
  const isExpanded = expandedSection === "journey";

  const handleToggle = () => {
    toggleSection("journey");
  };

  return (
    <section
      id="journey"
      className="w-full py-8 lg:py-16 flex lg:items-center items-start justify-center relative overflow-hidden"
    >
      <div className="w-full lg:max-w-6xl max-w-full">
        {/* Header */}
        {/* <div className="cursor-pointer w-full mb-12" onClick={handleToggle}>
          <div className="flex items-center justify-between">
            <h2 className="font-light text-xl lg:text-4xl tracking-wide text-black">
              Timeline / Journey
            </h2>
            <FiChevronDown
              className={`text-black transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
          <div className="w-full h-px bg-black/10"></div>
        </div> */}

        <div
          className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] w-full"
          onClick={handleToggle}
        >
          <div className="block">
            <div className="flex-1 lg:flex-none text-left lg:text-left">
              <div className="flex items-center justify-between">
                <h2 className="text-black font-light text-xl lg:text-4xl tracking-wider m-0 mb-4">
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

        {/* Content */}
        {isExpanded && (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-8 relative mt-12 lg:mt-20">
            <div className="relative lg:space-y-6 space-y-4 ">
              {/* Vertical timeline line */}
              <div
                className="absolute lg:left-7 left-7 top-3 bottom-0 w-[2px] bg-black/20 rounded-full z-0"
                style={{ transform: "translateX(-50%)" }}
              />
              {TIMELINE.map((item) => (
                <div key={item.year} className="group relative">
                  <div className="flex items-center gap-3  border border-black/10 p-4 bg-white">
                    <span className="text-black font-light text-sm lg:text-base">
                      {item.year}
                    </span>
                    <div className="w-4 h-px bg-black/20"></div>
                    <p className="text-black font-light text-base lg:text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
