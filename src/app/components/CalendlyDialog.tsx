'use client';

import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyDialogProps {
  url: string;
  rootElement?: HTMLElement | null;
}

const CalendlyDialog: React.FC<CalendlyDialogProps> = ({ url, rootElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => {
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  return {
    openCalendly,
    calendlyModal: (
      <PopupModal
        url={url}
        onModalClose={closeCalendly}
        open={isOpen}
        rootElement={rootElement}
      />
    ),
  };
};

export default CalendlyDialog;
