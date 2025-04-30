const SectionTitle = ({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'center' | 'left' }) => (
  <div className={`mb-8 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h2>
    {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);
export default SectionTitle; 