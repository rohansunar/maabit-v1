import React from 'react';
import servicesData from '../../../data/servicesData';
import IconWrapper from '../common/IconWrapper';
import Button from '../common/Button';

const iconMap: Record<string, React.ReactNode> = {
  'Custom Software Development': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 01-2-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  ),
  'Web Development': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 0l9 9m0 0l9-9" /></svg>
  ),
  'Mobile App Development': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" /><circle cx="12" cy="18" r="1" /></svg>
  ),
  'AI Solutions': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
  ),
  'Cloud Solutions': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h1V9a5 5 0 0110 0v2h1a4 4 0 010 8H7a4 4 0 01-4-4z" /></svg>
  ),
  'UI/UX Design': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 9h20" /></svg>
  ),
};

const ServicesGrid = () => (
  <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-16">
    {servicesData.map((service, i) => (
      <div key={i} className="relative flex flex-col md:flex-row items-start bg-white rounded-2xl shadow-xl p-8 overflow-hidden border border-gray-100">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <IconWrapper>{iconMap[service.title] || <span />}</IconWrapper>
            <h3 className="text-2xl font-extrabold text-gray-900">{service.title}</h3>
          </div>
          <p className="text-gray-600 mb-4 text-base font-medium">{service.description}</p>
          <div className="mb-2 font-bold text-gray-900">Key Features</div>
          <ul className="mb-6 space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="text-maabit-blue">✔️</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="bg-maabit-blue text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" /></svg>
          </Button>
        </div>
        {/* Glass/gradient effect on the right */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-64 h-12 rounded-xl bg-gradient-to-r from-white/60 via-blue-100/40 to-maabit-blue/10 shadow-lg blur-sm" style={{ zIndex: 0 }} />
      </div>
    ))}
  </section>
);
export default ServicesGrid; 