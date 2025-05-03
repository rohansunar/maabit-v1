import { Metadata } from "next";

// Determine the base URL for the website
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maabit.com";

// Base URL for the website
export const siteConfig = {
  name: "Maabit",
  url: baseUrl,
  description:
    "Maabit provides innovative software development and digital transformation solutions to help businesses grow and succeed in the digital age.",
};

// Default metadata configuration
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};
