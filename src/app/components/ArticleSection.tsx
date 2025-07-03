import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ARTICLES } from "../constants/homePageConstant";
import { FiChevronDown } from "react-icons/fi";
import { useSectionContext } from "../context/SectionContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ArticleSection() {
  const { expandedSection, toggleSection } = useSectionContext();
  const isExpanded = expandedSection === "articles";

  const handleToggle = () => {
    toggleSection("articles");
  };

  return (
    <section
      id="articles"
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
                  Articles
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
              ? "opacity-100 transform translateY(0) mt-12 lg:mt-20"
              : "opacity-0 transform -translateY-10 mt-0 pointer-events-none"
          }`}
          style={{
            maxHeight: isExpanded ? "none" : "0px",
            transition:
              "opacity 800ms ease-out, transform 800ms ease-out, max-height 800ms ease-out",
          }}
        >
          <div className="relative lg:p-8 p-0">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={15}
              slidesPerView={1.2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
            >
              {ARTICLES.map((a) => (
                <SwiperSlide key={a.title}>
                  <div className="flex flex-col h-full bg-white  border border-black/10 overflow-hidden transition-all duration-300">
                    {/* Article Image */}
                    <div className="relative w-full bg-gray-100 h-[200px] lg:h-[250px] group">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                    {/* Article Content */}
                    <div className="flex flex-col flex-1 px-6 py-6">
                      <h3 className="text-base lg:text-xl font-light text-black mb-2 leading-tight">
                        {a.title}
                      </h3>
                      <p className="text-gray-700 lg:text-base text-sm flex-1 font-light line-clamp-2 lg:leading-7 leading-6">
                        {a.description}
                      </p>
                      <div className="flex">
                        <Link
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-700 hover:text-black hover:underline font-light lg:text-base text-sm mt-0.5"
                        >
                          Read More...
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Swiper's built-in navigation and pagination will be used */}
            </Swiper>
          </div>
          {/* Call to action */}
          <div className="flex lg:justify-center justify-start mt-10 lg:mt-0">
            <Link
              href="https://www.linkedin.com/in/chitrakshivalik/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 lg:py-3 py-2 border-2 border-black/10 text-black font-light hover:bg-black/10 backdrop-blur-xl transition-all duration-300 text-sm lg:text-base"
            >
              <span>Read All Articles</span>
              <FaExternalLinkAlt className="text-sm text-black/70 font-light" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
