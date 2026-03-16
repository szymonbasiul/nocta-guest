import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nocta Guest — Premium Hospitality Startup Landing Page",
  description:
    "Premium hospitality startup landing page built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}