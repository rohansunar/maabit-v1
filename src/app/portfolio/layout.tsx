import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "E-Commerce platform | Maabit",
  description:
    "A complete e-commerce solution with advanced product filtering, payment gateway integration, and inventory management.",
  openGraph: {
    title: "E-Commerce platform | Maabit",
    description:
      "A complete e-commerce solution with advanced product filtering, payment gateway integration, and inventory management.",
    url: "portfolia",
  },
};

export default function ECommercePlatformLayout({ children }: { children: React.ReactNode }) {
  return children;
}
