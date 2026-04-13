import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import InActionHero from "@/components/InActionHero";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: 'In Action - The Casey Group',
  description: 'Discover how The Casey Group has helped clients achieve success through strategic communications, advocacy, and community engagement. Real challenges. Strategic solutions. Measurable results.',
}

export default function InActionPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <InActionHero />
      <CaseStudies />
    </div>
  );
} 