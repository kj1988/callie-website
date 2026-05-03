import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL("https://www.mycallie.app");
const siteTitle =
  "Callie — Track calories in 30 seconds · Type, talk or snap";
const siteDescription =
  "World's easiest calorie tracker that cares about your sanity, not just numbers. AI-powered logging from Inlab Products.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Calorie tracker",
    "AI nutrition",
    "food diary",
    "macro tracker",
    "Callie",
    "Inlab Products",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Callie",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: "Callie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
