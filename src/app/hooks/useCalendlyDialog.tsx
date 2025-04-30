'use client';

import { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import { CALENDLY_URL } from '../constants/calendly';

export const useCalendlyDialog = (url: string = CALENDLY_URL) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Set the root element to the document body when component mounts
    setRootElement(document.getElementById('root') || document.body);
  }, []);

  const openCalendly = () => {
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  const CalendlyModal = () => (
    <PopupModal
      url={url}
      onModalClose={closeCalendly}
      open={isOpen}
      rootElement={rootElement || document.body}
    />
  );

  return {
    openCalendly,
    closeCalendly,
    CalendlyModal,
  };
};
