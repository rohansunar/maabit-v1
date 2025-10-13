import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Maabit',
  description: 'Get in touch with Maabit for your software development and digital transformation needs. We\'re here to help you achieve your business goals.',
  openGraph: {
    title: 'Contact Us | Maabit',
    description: 'Get in touch with Maabit for your software development and digital transformation needs. We\'re here to help you achieve your business goals.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
