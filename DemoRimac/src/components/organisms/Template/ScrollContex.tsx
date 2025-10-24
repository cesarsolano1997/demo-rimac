import React, { createContext, useContext } from 'react';


interface ScrollContextType {
  scrollToTop: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollToTopCustom = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollToTop must be used within a ScrollProvider');
  }
  return context;
};

export default ScrollContext;