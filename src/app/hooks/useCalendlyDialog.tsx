'use client';

import { useEffect, useState } from 'react';
import { CALENDLY_URL } from '../constants/calendly';
import { useCalendlyDialog as useCalendlyDialogBase } from '../components/CalendlyDialog';

export const useCalendlyDialog = (url: string = CALENDLY_URL) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Set the root element to the document body when component mounts
    setRootElement(document.getElementById('root') || document.body);
  }, []);

  // Use the base implementation with the current root element
  return useCalendlyDialogBase(url, rootElement);
};
