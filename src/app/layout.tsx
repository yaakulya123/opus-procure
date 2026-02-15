import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpusProcure — AI Procurement Platform",
  description: "AI-powered corporate procurement platform. Find, compare, and contact vendors in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
