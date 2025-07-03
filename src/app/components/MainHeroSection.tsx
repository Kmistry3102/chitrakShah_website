"use client";
import React, { useEffect, useState } from "react";
import {
  HERO_HEADING,
  HERO_SUBTITLE,
  TAGLINE_ITEMS,
  HERO_BADGES,
  CS_Image,
  Description,
} from "../constants/homePageConstant";
import Image from "next/image";

export default function MainHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full lg:max-w-6xl max-w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center items-start justify-between gap-12 lg:gap-16 min-h-screen lg:py-16 py-24">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-left lg:space-y-6 space-y-4">
            {/* Main Heading with Animation */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-3xl lg:text-5xl font-medium tracking-wider text-black leading-tight">
                {HERO_HEADING}
              </h1>
            </div>

            {/* Description with Animation */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-lg lg:text-xl font-light text-black">
                {Description}
              </p>
            </div>

            {/* Subtitle with Animation */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-lg lg:text-xl text-black font-light max-w-2xl">
                {HERO_SUBTITLE}
              </p>
            </div>

            {/* Tagline Items with Animation */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex flex-wrap gap-2 lg:gap-4 items-center">
                {TAGLINE_ITEMS.map((item, index) => (
                  <React.Fragment key={item}>
                    <span className="lg:py-1.5 py-1 text-black font-light text-lg lg:text-xl transition-all duration-300">
                      {item}
                    </span>
                    {index < TAGLINE_ITEMS.length - 1 && (
                      <span className="w-0.1 h-5 bg-black/40 border-l border-black/20"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Badges with Animation */}
            <div
              className={`transition-all duration-1000 delay-800 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {HERO_BADGES.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className="group flex items-center lg:py-2 py-2 transition-all duration-300  cursor-pointer "
                      style={{ animationDelay: `${1000 + index * 100}ms` }}
                    >
                      <span className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 bg-black/80 lg:mr-3 mr-1 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white text-sm lg:text-lg" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-black font-light text-lg lg:text-xl">
                          {badge.label}
                          {badge.value && (
                            <span className="text-black/80 font-light text-lg lg:text-xl">
                              {badge.value}
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex lg:justify-center justify-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-black/20 rounded-full animate-bounce hidden lg:block"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-black/30 rounded-full animate-bounce delay-1000 hidden lg:block"></div>

                {/* Main Image Container */}
                <div className="relative w-64 h-80 lg:w-96 lg:h-[500px] group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Image Frame */}
                  <div className="relative w-full h-full overflow-hidden border-4 border-black/20">
                    <Image
                      src={CS_Image}
                      alt="Chitrak Shah"
                      fill
                      className="object-cover group-hover:scale-105 lg:grayscale group-hover:grayscale-0 transition-transform duration-700"
                      priority
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-2 border-black/30 group-hover:border-black/50 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
