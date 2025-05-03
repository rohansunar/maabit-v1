import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Maabit',
  description: 'Learn about Maabit - a leading software development agency dedicated to transforming digital visions into reality with innovative solutions.',
  openGraph: {
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
