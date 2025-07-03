import React from "react";
import { TERRITORIES } from "../constants/homePageConstant";
import { FiChevronDown } from "react-icons/fi";
import { useSectionContext } from "../context/SectionContext";

export default function TerritoryReachSection() {
  const { expandedSection, toggleSection } = useSectionContext();
  const isExpanded = expandedSection === "territory";

  const handleToggle = () => {
    toggleSection("territory");
  };

  return (
    <section
      id="territory"
      className="w-full flex flex-col items-center lg:py-16 py-8"
    >
      <div className="w-full lg:max-w-6xl max-w-full">
        {/* Collapsible Header */}
        <div
          className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] w-full"
          onClick={handleToggle}
        >
          <div className="block">
            <div className="flex-1 lg:flex-none text-left lg:text-left">
              <div className="flex items-center justify-between">
                <h2 className="text-black font-light text-xl lg:text-4xl tracking-wider m-0 mb-4">
                  Territory & Reach
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
              ? "opacity-100 transform translateY(0) mt-12 lg:mt-20"
              : "opacity-0 transform -translateY-10 mt-0 pointer-events-none"
          }`}
          style={{
            maxHeight: isExpanded ? "none" : "0px",
            transition:
              "opacity 800ms ease-out, transform 800ms ease-out, max-height 800ms ease-out",
          }}
        >
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {TERRITORIES.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className="p-4 lg:p-8 border border-black/10 hover:border-black/40 transition-all duration-300"
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
                  <div className="">
                    <div className="flex flex-col items-start gap-3 mb-1">
                      <span className="px-3 py-1 text-xs font-light bg-white text-black border border-black/10">
                        {item.status}
                      </span>
                      <span className="text-black font-light text-lg lg:text-xl">
                        {item.title}
                      </span>
                      <div className="text-gray-800 font-light lg:text-base text-sm mb-1">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
