import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimationFix from "@/components/AnimationFix";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TCG Strategic Communications | PR Washington DC | Northern Virginia Public Relations",
  description: "Leading public relations and strategic communications firm serving Washington DC, Loudoun County, Fairfax County, and Prince William County. Expert crisis communication, community engagement, government affairs, and political strategy services in Northern Virginia.",
  keywords: [
    "PR Washington DC",
    "Northern Virginia PR",
    "public relations Loudoun County",
    "Fairfax County public relations",
    "Prince William County PR",
    "community engagement",
    "crisis communication",
    "government affairs",
    "political strategy",
    "community organization",
    "strategic communications",
    "public affairs",
    "Washington DC communications",
    "Northern Virginia strategic communications",
    "crisis management",
    "stakeholder engagement",
    "advocacy services",
    "real estate PR",
    "sports PR",
    "corporate communications"
  ].join(", "),
  authors: [{ name: "TCG Strategic Communications" }],
  creator: "TCG Strategic Communications",
  publisher: "TCG Strategic Communications",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tcg-strategic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TCG Strategic Communications | Premier PR Firm in Washington DC & Northern Virginia",
    description: "Expert public relations, crisis communication, and community engagement services for Washington DC, Loudoun County, Fairfax County, and Prince William County. Trusted by major corporations, sports teams, and real estate developers.",
    url: '/',
    siteName: 'TCG Strategic Communications',
    images: [
      {
        url: '/logos/TCG.png',
        width: 1200,
        height: 630,
        alt: 'TCG Strategic Communications - PR Washington DC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TCG Strategic Communications | PR Washington DC | Northern Virginia",
    description: "Leading public relations firm serving Washington DC and Northern Virginia. Expert crisis communication, community engagement, and government affairs services.",
    images: ['/logos/TCG.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AnimationFix />
      </body>
    </html>
  );
}
