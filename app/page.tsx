import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TCG Strategic Communications | Premier PR Firm Washington DC | Northern Virginia Public Relations",
  description: "TCG Strategic Communications provides expert public relations, crisis communication, and community engagement services in Washington DC, Loudoun County, Fairfax County, and Prince William County. Trusted by Fortune 500 companies, sports teams, and real estate developers.",
  alternates: {
    canonical: '/',
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "TCG Strategic Communications",
  "description": "Leading public relations and strategic communications firm serving Washington DC and Northern Virginia",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.thecaseygroup.us",
  "telephone": "+1-703-981-6034", // Update with actual phone number
  "email": "ddonofrio@thecaseygroup.us", 
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Virginia",
    "addressCountry": "US",
    "addressLocality": "Northern Virginia"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Washington, DC"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Loudoun County, Virginia"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Fairfax County, Virginia"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Prince William County, Virginia"
    }
  ],
  "serviceType": [
    "Public Relations",
    "Strategic Communications", 
    "Crisis Communication",
    "Community Engagement",
    "Government Affairs",
    "Political Strategy",
    "Corporate Communications",
    "Stakeholder Engagement"
  ],
  "knowsAbout": [
    "Public Relations",
    "Crisis Management",
    "Community Engagement", 
    "Government Affairs",
    "Political Strategy",
    "Strategic Communications",
    "Stakeholder Relations",
    "Media Relations"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/the-casey-group_3/",
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <HeroSection />
      <section id="expertise">
        <ExpertiseSection />
      </section>

      <section id="clients">
        <ClientsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

    </div>
  );
}
