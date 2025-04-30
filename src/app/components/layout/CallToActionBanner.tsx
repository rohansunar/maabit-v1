'use client';

import { useCalendlyDialog } from "../../hooks/useCalendlyDialog";

const CallToActionBanner = () => {
  const { openCalendly, CalendlyModal } = useCalendlyDialog();

  return (
    <div className="bg-gradient-to-r from-maabit-blue to-blue-400 text-white py-8 px-4 rounded-2xl text-center my-8">
      <h3 className="text-2xl font-bold mb-2">Ready to transform your digital presence?</h3>
      <button
        className="bg-white text-maabit-blue font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        onClick={openCalendly}
      >
        Book a Free Consultation
      </button>
      <CalendlyModal />
    </div>
  );
};

export default CallToActionBanner;