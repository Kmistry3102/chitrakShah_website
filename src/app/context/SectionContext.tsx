"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SectionType = 
  | 'whoAmI'
  | 'journey'
  | 'territory'
  | 'realEstate'
  | 'whyImHere'
  | 'portfolio'
  | 'articles'
  | 'accessLinks';

interface SectionContextType {
  expandedSection: SectionType | null;
  setExpandedSection: (section: SectionType | null) => void;
  toggleSection: (section: SectionType) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};

interface SectionProviderProps {
  children: ReactNode;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({ children }) => {
  const [expandedSection, setExpandedSection] = useState<SectionType | null>(null);

  const scrollToSection = (section: SectionType) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      // Add a delay to ensure the section is expanded before scrolling
      setTimeout(() => {
        const elementRect = sectionElement.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const offset = 120; // Slightly more offset for better positioning
        
        window.scrollTo({
          top: absoluteElementTop - offset,
          behavior: 'smooth'
        });
      }, 300); // Longer delay to coordinate with the 1000ms expansion animation
    }
  };

  const toggleSection = (section: SectionType) => {
    if (expandedSection === section) {
      // Closing the section - no scrolling
      setExpandedSection(null);
    } else {
      // Opening a new section - scroll to it
      setExpandedSection(section);
      scrollToSection(section);
    }
  };

  return (
    <SectionContext.Provider value={{
      expandedSection,
      setExpandedSection,
      toggleSection,
    }}>
      {children}
    </SectionContext.Provider>
  );
}; 