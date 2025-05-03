import { Metadata } from 'next';
import { defaultMetadata } from '../lib/metadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us | Maabit',
  description: 'Get in touch with Maabit for your software development and digital transformation needs. We\'re here to help you achieve your business goals.',
  openGraph: {
    ...defaultMetadata.openGraph,
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
