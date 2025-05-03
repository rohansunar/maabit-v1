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

  const CalendlyModal = useCallback(() => (
    <PopupModal
      url={url}
      onModalClose={closeCalendly}
      open={isOpen}
      rootElement={rootElement || document.body}
    />
  ), [url, isOpen, closeCalendly, rootElement]);

  return {
    openCalendly,
    closeCalendly,
    CalendlyModal,
  };
};

// Export the hook as default for backward compatibility
export default useCalendlyDialog;
