import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Futuristic Analytics Dashboard",
  description: "A modern, tech-inspired analytics dashboard with smooth scrolling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
