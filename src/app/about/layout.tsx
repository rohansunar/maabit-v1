import { Metadata } from 'next';
import { defaultMetadata } from '../lib/metadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us | Maabit',
  description: 'Learn about Maabit - a leading software development agency dedicated to transforming digital visions into reality with innovative solutions.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'About Us | Maabit',
    description: 'Learn about Maabit - a leading software development agency dedicated to transforming digital visions into reality with innovative solutions.',
    url: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
