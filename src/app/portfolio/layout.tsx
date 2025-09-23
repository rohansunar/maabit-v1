import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "E-Commerce Platform | Complete Online Store Solution",
  description:
    "Build your online store with our comprehensive e-commerce platform. Advanced product filtering, secure payment integration, inventory management, and mobile-optimized design for business growth.",
  keywords:
    "e-commerce, online store, payment integration, inventory management, web development, Next.js, React",
  openGraph: {
    title: "E-Commerce Platform | Complete Online Store Solution",
    description:
      "Build your online store with our comprehensive e-commerce platform. Advanced features for seamless online shopping experience.",
    url: "/portfolio/ecommerce",
    type: "website",
    images: [
      {
        url: "/images/ecommerce-dashboard.png",
        width: 1200,
        height: 630,
        alt: "E-Commerce Platform Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Platform | Complete Online Store Solution",
    description: "Build your online store with our comprehensive e-commerce platform.",
    images: ["/images/ecommerce-dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ECommercePlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "E-Commerce Platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-Based",
            "description":
              "A complete e-commerce solution with advanced product filtering, secure payment integration, and inventory management system.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "author": {
              "@type": "Organization",
              "name": "Your Company Name",
            },
            "features": [
              "Product Filtering",
              "Payment Integration",
              "Inventory Management",
              "Mobile Optimization",
              "Analytics Dashboard",
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
