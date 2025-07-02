'use client'
import React from 'react';
import { HERO_HEADING, HERO_SUBTITLE, TAGLINE_ITEMS, HERO_BADGES, CS_Image, Description } from '../constants/homePageConstant';
import Image from 'next/image';

export default function MainHeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full lg:max-w-6xl max-w-full">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center items-start justify-between gap-8 lg:gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-left">
            <h1 className="text-black font-medium text-3xl lg:text-5xl tracking-wider m-0 lg:mb-6 mb-4">
              {HERO_HEADING}
            </h1>
            <p className="text-black font-normal text-base lg:text-xl tracking-wide lg:mb-6 mb-2">
              {Description}
            </p>
            <p className="text-black font-light text-base lg:text-lg tracking-wide lg:mb-8 mb-4">
              {HERO_SUBTITLE}
            </p>
            
            {/* Tagline Items */}
            <div className="text-black font-light text-base lg:text-xl mb-8 flex gap-2 lg:gap-4 items-center flex-wrap justify-start">
              {TAGLINE_ITEMS.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="font-light">{item}</span>
                  {idx < TAGLINE_ITEMS.length - 1 && <span className="opacity-50">|</span>}
                </React.Fragment>
              ))}
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-start w-full">
              {HERO_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center bg-black/10 border border-black/20 rounded px-4 lg:px-4 py-1 lg:py-1.5 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer backdrop-blur-sm">
                    <span className="flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-black/20 mr-2 sm:mr-2.5">
                      <Icon className="text-black lg:text-base text-sm" />
                    </span>
                    <span className="text-black font-light text-sm lg:text-base">
                      {badge.label}
                      {badge.value && <span className="font-light ml-1">{badge.value}</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="flex-1 flex lg:justify-center justify-end">
            <div className="relative">
              {/* Image Container with Glow Effect */}
              <div className="relative w-50 h-50 lg:w-96 lg:h-[500px]">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded blur-3xl"></div>
                
                {/* Main Image */}
                <div className="relative w-full h-full rounded overflow-hidden lg:border-4 border-1 border-black/20">
                  <Image 
                    src={CS_Image} 
                    alt="Chitrak Shah" 
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                    priority
                  />
                </div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 lg:w-3 lg:h-3 w-2 h-2 bg-black/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 lg:w-2 lg:h-2 w-1 h-1 bg-black/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
