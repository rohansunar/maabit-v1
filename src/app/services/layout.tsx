import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Maabit',
  description: 'Explore Maabit\'s comprehensive range of software development and digital transformation services designed to help your business thrive.',
  openGraph: {
    title: 'Our Services | Maabit',
    description: 'Explore Maabit\'s comprehensive range of software development and digital transformation services designed to help your business thrive.',
    url: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
