import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henzo Logistics",
  description: "Home - Henzo Logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-auto bg-top bg-no-repeat md:bg-bg">{children}</div>
      </body>
    </html>
  );
}
