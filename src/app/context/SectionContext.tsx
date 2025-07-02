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

  const toggleSection = (section: SectionType) => {
    setExpandedSection(expandedSection === section ? null : section);
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