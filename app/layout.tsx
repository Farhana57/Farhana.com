import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingSocialRail from "@/components/FloatingSocialRail";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farhana Khatun — Full-Stack MERN Developer",
  description:
    "Portfolio of Farhana Khatun showcasing live full-stack MERN and Next.js web applications. Available for freelance & remote roles.",
  keywords: [
    "Farhana Khatun",
    "Full-Stack MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Freelance Web Developer Bangladesh",
  ],
  openGraph: {
    title: "Farhana Khatun — Full-Stack MERN Developer",
    description:
      "Portfolio of Farhana Khatun showcasing live full-stack MERN and Next.js web applications.",
    url: "https://farhana-khatun.vercel.app/",
    siteName: "Farhana Khatun Portfolio",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Farhana Khatun — Full-Stack MERN Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col overflow-x-hidden antialiased`}
      >
        <Navbar />
        <div className="flex-1 pt-16">{children}</div>
        <WhatsAppFloat />
        <FloatingSocialRail />
        <ScrollToTopButton />
      </body>
    </html>
  );
}