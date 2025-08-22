
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "모디스토어 - 최신 패션 트렌드",
  description: "최신 패션 트렌드를 만나보세요. 상의, 하의, 신발, 가방, 액세서리까지 모든 것을 모디스토어에서.",
  keywords: "패션, 의류, 신발, 가방, 액세서리, 쇼핑몰",
  authors: [{ name: "모디스토어" }],
  openGraph: {
    title: "모디스토어 - 최신 패션 트렌드",
    description: "최신 패션 트렌드를 만나보세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
  