import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  alignment?: 'center' | 'left';
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, alignment = 'center' }) => {
  // Highlight 'Services' in the title with a gradient/shadow if present
  const titleWithEffect = title.includes('Services') ? (
    <>
      {title.split(' ').map((word, i) =>
        word === 'Services' ? (
          <span
            key={i}
            className="bg-gradient-to-r from-maabit-blue to-blue-400 text-transparent bg-clip-text drop-shadow-lg"
          >
            {word}
          </span>
        ) : (
          <span key={i}> {word} </span>
        )
      )}
    </>
  ) : (
    title
  );

  return (
    <section
      className={`py-20 flex flex-col ${alignment === 'center' ? 'items-center text-center' : 'items-start text-left'} justify-center`}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
        {titleWithEffect}
      </h1>
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-4">{subtitle}</p>
    </section>
  );
};

export default HeroSection; 