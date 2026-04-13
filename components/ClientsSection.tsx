"use client"

import Link from "next/link"
import Image from "next/image"
import { imgPath } from "@/lib/image-path"

const clients = [
  {
    name: "I66 Outside the Beltway",
    industry: "Communications/Major Toll Road Operator",
    logo: "/logos/i66.png",
    logoAlt: "I66 Outside the Beltway Logo"
  },
   {
    name: "Bank of America",
    industry: "Financial Services",
    logo: "/logos/bankofamerica.png",
    logoAlt: "Bank of America Logo"
  },
  
  {
    name: "Merrill Lynch",
    industry: "Financial Services",
    logo: "/logos/merrill.png",
    logoAlt: "Merrill Lynch Logo"
  },
  {
    name: "The Carlyle Group",
    industry: "Project Management/Real Estate",
    logo: "/logos/Carlyle-Group.png",
    logoAlt: "The Carlyle Group Logo"
  },
  {
    name: "AT&T",
    industry: "Telecommunications & Cell Tower",
    logo: "/logos/ATT.png",
    logoAlt: "AT&T Logo"
  },
  {
    name: "Ford Motor Company",
    industry: "Automotive",
    logo: "/logos/ford.jpg",
    logoAlt: "Ford Motor Company Logo"
  },
  {
    name: "The Mills Corporation",
    industry: "Large Real Estate Developer",
    logo: "/logos/mills.svg",
    logoAlt: "The Mills Corporation Logo"
  },
  {
    name: "HCA",
    industry: "Health Care",
    logo: "/logos/HCA.jpg",
    logoAlt: "HCA Logo"
  }
]

export default function ClientsSection() {
  return (
    <section className="bg-white dark:bg-slate-900 py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="text-center mb-16 lg:mb-24"
        >
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white mb-6"
          >
            TCG Clients
          </h2>
          
          <p
            className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Guiding our clients on the road to success
          </p>
        </div>

        {/* Clients List */}
        <div
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 lg:gap-y-12">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group border-b border-slate-200 dark:border-slate-800 pb-6 lg:pb-8"
              >
                <div className="flex items-start gap-4">
                  {/* Dot and Logo horizontally aligned */}
                  <div className="flex items-center min-w-[72px] mr-2 relative">
                    {/* Dot to the left, vertically centered with logo */}
                    <div
                      className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"
                      style={{ minWidth: '0.5rem', minHeight: '0.5rem' }}
                    />
                    {client.logo && (
                      <div>
                        <Image
                          src={imgPath(client.logo)}
                          alt={client.logoAlt}
                          width={120}
                          height={120}
                          className="object-contain w-16 h-16 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {client.industry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20 lg:mb-32"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">8+</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">Fortune 500 Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">15+</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">Industry Sectors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary mb-2">30+</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mb-20 lg:mb-32"
        >
          <Link href="/clients">
            <div className="inline-flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
              <span className="text-lg font-semibold">See All Clients</span>
              <div
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <div className="w-3 h-3 border-t-2 border-r-2 border-current rotate-45" />
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom Quote - matching ExpertiseSection style */}
        <div
          className="text-center max-w-4xl mx-auto"
        >
          <div className="text-6xl lg:text-8xl text-slate-200 dark:text-slate-800 font-black mb-6">"</div>
          <blockquote className="text-2xl lg:text-3xl xl:text-4xl text-slate-700 dark:text-slate-300 font-light leading-relaxed italic">
            From Fortune 100 companies to emerging leaders, we deliver results that 
            <span className="font-medium text-slate-900 dark:text-white"> matter.</span>
          </blockquote>
          <div className="mt-8 w-24 h-1 bg-primary mx-auto" />
        </div>
      </div>
    </section>
  )
} 