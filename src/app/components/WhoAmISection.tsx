import React from "react";
import { WHO_AM_I_ROLES } from "../constants/homePageConstant";
import { FiChevronDown } from "react-icons/fi";
import { useSectionContext } from "../context/SectionContext";

export default function WhoAmISection() {
  const { expandedSection, toggleSection } = useSectionContext();
  const isExpanded = expandedSection === 'whoAmI';

  const handleToggle = () => {
    toggleSection('whoAmI');
  };

  return (
    <section id="whoAmI" className="w-full flex lg:items-center items-start justify-center py-8 lg:py-20 relative overflow-hidden bg-white">
      <div className="w-full lg:max-w-6xl max-w-full">
        {/* Collapsible Header */}
        <div 
          className="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          onClick={handleToggle}
        >
          <div className="block">
            <div className="flex-1 lg:flex-none text-left lg:text-left">
              <div className="flex items-center justify-between">
                <h2 className="font-light text-xl lg:text-4xl text-black mb-4 tracking-wide">
                  Who Am I
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
          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:p-5 p-0">
            {WHO_AM_I_ROLES.map((role, index) => {
              // const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="group relative hover:scale-105 transition-all duration-500 border border-black/10 bg-black/5 rounded p-6 lg:p-8 shadow-lg hover:shadow-xl"
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
                  {/* Icon Section */}
                  <div className="flex items-center gap-6">
                    <div>
                      <h4 className="text-black text-lg font-light mb-2">{role.title}</h4>
                      <p className="text-black/70 text-base font-light">{role.caption}</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-black/10 to-transparent rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
