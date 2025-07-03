"use client";
import Image from "next/image";
import React from "react";
import { GALLERY_ITEMS } from "../constants/homePageConstant";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PiPlayCircleThin } from "react-icons/pi";

export default function GallerySection() {
  return (
    <section className="w-full lg:py-20 py-10 bg-white text-black text-left">
      <div className="w-full lg:max-w-6xl max-w-full lg:mx-auto">
        <h2 className="text-xl lg:text-4xl font-light tracking-wider mb-2">
          GALLERY
        </h2>
        <p className="text-gray-600 text-sm lg:text-base mb-12 font-light">
          Key Moments from the Journey
        </p>
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 20 },
            }}
          >
            {GALLERY_ITEMS.map((item, idx) => {
              const Card = (
                <div className="flex flex-col h-full bg-white rounded overflow-hidden transition-all duration-300 cursor-pointer">
                  <div className="relative w-full rounded-t h-[240px] lg:h-[320px] group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full rounded-t object-left-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-100 transition-opacity duration-300"/>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-300">
                      <div className=" flex items-center justify-center">
                        <PiPlayCircleThin className="text-white text-5xl lg:text-6xl" />
                      </div>
                    </div>
                  </div>
                  <div className="text-black text-lg font-light text-left py-3">
                    {item.title}
                  </div>
                </div>
              );  
              return (
                <SwiperSlide key={idx}>
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Card}
                    </Link>
                  ) : (
                    Card
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
