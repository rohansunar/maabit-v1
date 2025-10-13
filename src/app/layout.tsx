import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://maabit.com'),
  title: "Maabit - Digital Solutions Agency",
  description: "Transform your digital vision into reality with our expert team of developers and designers.",
  openGraph: {
    title: "Maabit - Digital Solutions Agency",
    description: "Transform your digital vision into reality with our expert team of developers and designers.",
    url: "/",
    siteName: "Maabit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
