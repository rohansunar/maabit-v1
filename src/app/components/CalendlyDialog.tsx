'use client';

import React, { useState, useCallback } from 'react';
import { PopupModal } from 'react-calendly';

// Create a custom hook instead of a component
export const useCalendlyDialog = (url: string, rootElement?: HTMLElement | null) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsOpen(false);
  }, []);

  const CalendlyModal = useCallback(() => {
    // Only render the PopupModal on the client side
    if (typeof window === 'undefined') {
      return null; // Return null during server-side rendering
    }

    // Safe to access document on the client side
    const root = rootElement || document.body;

    return (
      <PopupModal
        url={url}
        onModalClose={closeCalendly}
        open={isOpen}
        rootElement={root}
      />
    );
  }, [url, isOpen, closeCalendly, rootElement]);

  return {
    openCalendly,
    closeCalendly,
    CalendlyModal,
  };
};

// Export the hook as default for backward compatibility
export default useCalendlyDialog;
