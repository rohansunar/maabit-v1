import { Metadata } from 'next';
import { defaultMetadata } from '../lib/metadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Services | Maabit',
  description: 'Explore Maabit\'s comprehensive range of software development and digital transformation services designed to help your business thrive.',
  openGraph: {
    ...defaultMetadata.openGraph,
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
