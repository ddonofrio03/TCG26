"use client"

import { Card, CardContent } from "@/components/ui/card"
import { HiSpeakerWave, HiBuildingLibrary, HiUserGroup } from "react-icons/hi2"
import Link from "next/link"
import Image from "next/image"
import { imgPath } from "@/lib/image-path"

const services = [
  {
    icon: HiSpeakerWave,
    title: "Communications",
    services: [
      "Media Relations",
      "Crisis Communications", 
      "Media Markets & Engagement"
    ]
  },
  {
    icon: HiBuildingLibrary,
    title: "Advocacy",
    services: [
      "Land Use Planning & Permitting",
      "Business & Commerce Regulatory Obligations",
      "Public Input Process"
    ]
  },
  {
    icon: HiUserGroup,
    title: "Community",
    services: [
      "Door-to-Door Campaigns",
      "Public Engagement & Outreach",
      "Town Halls and Open Houses "
    ]
  }
]

export default function ExpertiseSection() {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">


        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column - Text Content */}
          <div
            className="space-y-8"
          >
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-tight"
            >
              Small firm.
              <br />
              <span className="text-primary">Big impact.</span>
              <br />
              Major clients.
            </h2>

            <div
              className="space-y-6 text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              <p>
                <strong>We're boutique by design.</strong> While others chase scale, 
                we deliver precision. Our multi-disciplinary approach combines 
                advocacy, communications, and community engagement to solve 
                complex challenges for Fortune 100 companies and emerging leaders alike.
              </p>

              <p>
                From crisis communications to regulatory navigation, from grassroots 
                campaigns to boardroom strategy — we integrate diverse disciplines 
                that larger firms often silo. <strong>The result? Faster decisions, 
                deeper relationships, and outcomes that matter.</strong>
              </p>
            </div>

            <div
              className="grid grid-cols-2 gap-8 pt-6"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-2">30+</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-2">Fortune 100 &amp; Startups</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Clients Served Nationwide</div>
              </div>
            </div>

            <div
              className="pt-4"
            >

              <Link href="/in-action" className="inline-flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                <span className="text-lg font-semibold">See Our Work</span>
                <div
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <div className="w-3 h-3 border-t-2 border-r-2 border-current rotate-45" />
                </div>
              </Link>

            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {/* Top Left */}
            <div
              className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-900" />
              <div className="absolute inset-0">
                <Image
                  src={imgPath("/images/council.jpg")}
                  alt="City Council"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 25vw"
                  quality={80}
                  priority={false}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Top Right */}
            <div
              className="aspect-square bg-primary/20 rounded-lg overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-left p-4">
                  <div className="text-lg font-bold leading-tight">
                    Decades of<br />
                    experience harnessed<br />
                    for your benefit
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0" />
            </div>

            {/* Bottom Left */}
            <div
              className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800" />
                <div className="absolute inset-0">
                  <Image
                    src={imgPath("/images/recentcommunity.jpg")}
                    alt="TCG"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 25vw"
                    quality={80}
                    priority={false}
                  />
                </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Bottom Right */}
            <div
              className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-900" />
              <div className="absolute inset-0">
                <Image
                  src={imgPath("/images/comms.jpeg")}
                  alt="TCG"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 25vw"
                  quality={80}
                  priority={false}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>

        
        {/* Services Grid */}
        <div
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-24 lg:mt-32 mb-24 lg:mb-40"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8 lg:p-10 xl:p-12 h-full min-h-[360px] lg:min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-slate-200 dark:text-slate-800 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>


                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight uppercas pt-12">
                    {service.title}
                  </h3>

                  {/* Services List */}
                  <div className="space-y-4">
                    {service.services.map((item, i) => (
                      <div
                        key={i}
                        className="relative"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-2 h-2 bg-slate-900 dark:bg-white mt-3 flex-shrink-0" />
                          <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Quote/Principle */}
        <div
          className="mt-20 lg:mt-32 text-center max-w-4xl mx-auto"
        >
          <div className="text-6xl lg:text-8xl text-slate-200 dark:text-slate-800 font-black mb-6">"</div>
          <blockquote className="text-2xl lg:text-3xl xl:text-4xl text-slate-700 dark:text-slate-300 font-light leading-relaxed italic">
            Define yourself before others do. 
            <br />
            We take the time to understand your objectives in ways 
            <span className="font-medium text-slate-900 dark:text-white"> large firms simply cannot.</span>
          </blockquote>
          <div className="mt-8 w-24 h-1 bg-primary mx-auto" />
        </div>
      </div>
    </section>
  )
} 