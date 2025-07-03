import React, { useState } from "react";
import { ACCESS_LINKS } from "../constants/homePageConstant";
import { FiChevronDown } from "react-icons/fi";
import { useSectionContext } from "../context/SectionContext";
import Link from "next/link";

export default function AccessLinkSection() {
  const { expandedSection, toggleSection } = useSectionContext();
  const isExpanded = expandedSection === "accessLinks";
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = () => {
    toggleSection("accessLinks");
  };

  const handleCardClick = (idx: number) => {
    if (window.innerWidth < 1024) {
      setOpenIdx(openIdx === idx ? null : idx);
    }
  };

  return (
    <section
      id="accessLinks"
      className="w-full py-8 lg:py-16 flex flex-col lg:items-center items-start bg-white"
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
                <h2 className="text-black font-light text-xl lg:text-4xl tracking-wide mb-4">
                  Quick Access Links
                </h2>
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
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
              ? "opacity-100 transform translateY(0) mt-12 lg:mt-16"
              : "opacity-0 transform -translateY-10 mt-0 pointer-events-none"
          }`}
          style={{
            maxHeight: isExpanded ? "none" : "0px",
            transition:
              "opacity 800ms ease-out, transform 800ms ease-out, max-height 800ms ease-out",
          }}
        >
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:p-5 p-0">
            {ACCESS_LINKS.map((link, idx) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 lg:p-6 relative flex flex-col gap-2 transition-all duration-300
                  cursor-pointer border border-black/10 hover:border-black/40`}
                  style={{
                    animationDelay: `${idx * 200}ms`,
                    animation: isExpanded
                      ? "slideInUp 0.8s ease-out forwards"
                      : "none",
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded
                      ? "translateY(0)"
                      : "translateY(20px)",
                  }}
                  onClick={() => handleCardClick(idx)}
                >
                  <div className="flex flex-col items-start gap-2">
                    <div>
                      <Icon className="text-lg lg:text-xl text-black/70" />
                    </div>
                    <h3 className="font-light text-black text-base lg:text-lg">
                      {link.title}
                    </h3>
                    <div className="text-black/70 font-light text-sm lg:text-base">
                      {link.label}
                    </div>
                  </div>
                </Link>
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
