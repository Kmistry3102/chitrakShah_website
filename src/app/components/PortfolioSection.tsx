import React from "react";
import { PORTFOLIO } from "../constants/homePageConstant";
import { FiChevronDown } from "react-icons/fi";
import { useSectionContext } from "../context/SectionContext";

export default function PortfolioSection() {
  const { expandedSection, toggleSection } = useSectionContext();
  const isExpanded = expandedSection === 'portfolio';

  const handleToggle = () => {
    toggleSection('portfolio');
  };

  return (
    <section id="portfolio" className="w-full py-8 lg:py-16 flex flex-col lg:items-center items-start bg-white">
      <div className="w-full lg:max-w-6xl max-w-full">
        {/* Collapsible Header */}
        <div 
          className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] w-full"
          onClick={handleToggle}
        >
          <div className="block">
            <div className="flex-1 lg:flex-none text-left lg:text-left">
              <div className="flex items-center justify-between">
                <h2 className="text-black font-light text-xl lg:text-4xl mb-4 tracking-wide">
                  Portfolio
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:p-5 p-0">
            {PORTFOLIO.map((item, idx) => {
              return (
                <div
                  key={item.title}
                  className="group relative rounded border border-black/10 bg-gray-50 backdrop-blur-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-black/10"
                  style={{
                    animationDelay: `${idx * 150}ms`,
                    animation: isExpanded ? "slideInUp 0.6s ease-out forwards" : "none",
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-black mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm font-light">
                        {item.description}
                      </p>
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
