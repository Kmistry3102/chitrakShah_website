"use client";
import React from "react";
import MainHeroSection from "./MainHeroSection";
import R_IDSection from "./R_IDSection";
import VisionStatement from "./VisionStatement";
import JourneySection from "./JourneySection";
import TerritoryReachSection from "./TerritoryReachSection";
import RealEstateInterestsSection from "./RealEstateInterestsSection";
import WhyImHereSection from "./WhyImHereSection";
import ArticleSection from "./ArticleSection";
import PortfolioSection from "./PortfolioSection";
import WhoAmISection from "./WhoAmISection";
import AccessLinkSection from "./AccessLinkSection";
// import ConnectSection from "./ConnectSection";
import { SectionProvider } from "../context/SectionContext";
import GallerySection from "./GallerySection";

const MarqueeText = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-99 py-2 overflow-hidden text-center bg-white whitespace-nowrap">
      <div className="marquee">
        <div>
          <span>This is Beta version of Chitrak Shah</span>
          <span>This is Beta version of Chitrak Shah</span>
        </div>
      </div>
    </div>
  );
};

export default function MainPage() {
  return (
    <SectionProvider>
      <MarqueeText />
      <div className="relative w-full min-h-screen overflow-hidden bg-transparent flex flex-col items-center justify-center px-8 lg:px-6">
        {/* Sections */}
        <MainHeroSection />
      </div>
      <VisionStatement />
      <div className="relative w-full min-h-screen overflow-hidden bg-transparent flex flex-col items-center justify-center px-8 lg:px-6">
        <R_IDSection />
        <WhoAmISection />
        <JourneySection />
        <TerritoryReachSection />
        <RealEstateInterestsSection />
        <WhyImHereSection />
        <PortfolioSection />
        <ArticleSection />
        <AccessLinkSection />
        <GallerySection />
        {/* <ConnectSection /> */}
      </div>
    </SectionProvider>
  );
}
