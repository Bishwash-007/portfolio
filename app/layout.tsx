import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Bishwash Chaudhari - Portfolio",
  description: "Full Stack Developer and AI/ML Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased bg-black text-white selection:bg-white selection:text-black overflow-x-hidden`}>
        {/* Main background gradients */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Top hero gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          
          {/* Center ambient light */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_600px,rgba(120,119,198,0.15),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_600px,rgba(120,119,198,0.15),transparent_40%)]" />
          </div>

          {/* Subtle animated glow */}
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_50%)] animate-pulse-slow" />
          </div>
        </div>

        <div className="relative z-0">
          <Navbar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
