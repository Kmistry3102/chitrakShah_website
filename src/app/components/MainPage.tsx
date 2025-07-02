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
import ConnectSection from "./ConnectSection";
import { SectionProvider } from "../context/SectionContext";
import GallerySection from "./GallerySection";

export default function MainPage() {
  return (
    <SectionProvider>
      <div className="relative w-full min-h-screen overflow-hidden bg-transparent flex flex-col items-center justify-center px-8 lg:px-6">
        {/* Sections */}
        <MainHeroSection />
        <div className="flex flex-col-reverse lg:flex-row gap-8 w-full lg:max-w-6xl max-w-full">
          <R_IDSection />
          <VisionStatement />
        </div>
        <WhoAmISection />
        <JourneySection />
        <TerritoryReachSection />
        <RealEstateInterestsSection />
        <WhyImHereSection />
        <PortfolioSection />
        <ArticleSection />
        <AccessLinkSection />
        <GallerySection />
        <ConnectSection />
      </div>
    </SectionProvider>
  );
}
