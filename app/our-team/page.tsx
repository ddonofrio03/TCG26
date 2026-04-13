import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import TeamHero from "@/components/TeamHero";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: 'Our Team - The Casey Group',
  description: 'Meet the expert team behind The Casey Group. Depth of experience, experts in their fields, and dedicated team players driving strategic communications success.',
}

export default function OurTeamPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TeamHero />
      <TeamSection />
    </div>
  );
} 