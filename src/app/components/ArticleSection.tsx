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
    <section id="articles" className="w-full py-8 lg:py-16 flex flex-col lg:items-center items-start bg-white">
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
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isExpanded
              ? "max-h-[3000px] opacity-100 mt-12 lg:mt-20"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="relative lg:p-8 p-0">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
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
                  spaceBetween: 32,
                },
              }}
              className="!pb-10"
            >
              {ARTICLES.map((a) => (
                <SwiperSlide key={a.title}>
                  <div className="flex flex-col h-full bg-white rounded shadow-xl border border-black/10 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    {/* Article Image */}
                    <div className="relative w-full bg-gray-100 rounded-t h-[200px] lg:h-[250px]">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover w-full h-full rounded-t object-top"
                        priority
                      />
                    </div>
                    {/* Article Content */}
                    <div className="flex flex-col flex-1 px-6 py-6">
                      <h3 className="text-lg lg:text-xl font-light text-black mb-2 leading-tight">
                        {a.title}
                      </h3>
                      <p className="text-gray-700 text-base mb-6 flex-1 font-light line-clamp-2">
                        {a.description}
                      </p>
                      <div className="flex">
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 px-5 py-2 rounded bg-black text-white font-light text-sm shadow hover:bg-gray-900 transition-colors"
                        >
                          Read More <FaExternalLinkAlt className="text-xs" />
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
          <div className="flex justify-center mt-12 lg:mt-0">
            <Link
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded border-2 border-black/20 text-black font-medium hover:bg-black/10 backdrop-blur-xl transition-all duration-300 text-base hover:scale-105 hover:shadow-lg"
            >
              <span>Read All Articles</span>
              <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
      {/* <style jsx global>{`
        .articles-swiper {
          padding-bottom: 48px;
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
          background: #fff;
          border-radius: 9999px;
          width: 30px;
          height: 30px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 12px;
          transition: background 0.2s;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #f3f4f6;
        }
        .swiper-button-prev { left: 0; }
        .swiper-button-next { right: 0; }
        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
      `}</style> */}
    </section>
  );
}
