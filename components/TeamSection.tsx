"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    id: "david-donofrio",
    name: "David D'Onofrio",
    // title: "Founder & Principal",
    location: "Leesburg, Virginia",
    bio: "Nearly three decades of communications expertise spanning Fortune 100 companies to grassroots campaigns. Former Communications Director for Virginia's major political party and Loudoun County operations. Started career in D.C. with major trade associations before founding TCG.",
    highlight: "Managed billion-dollar regulatory projects and door-to-door advocacy campaigns with equal precision."
  },
  // {
  //   id: "ben-kelahan",
  //   name: "Ben Kelahan",
  //   // title: "Legislative Advocacy Director",
  //   location: "Northern Virginia",
  //   bio: "Two decades of legislative advocacy across all government levels. Chairman of The Advocacy Group (TAG), connecting top-tier lobbyists nationwide. Founder of ReNew Mexico and co-founder of Western Freedom, leading energy sector advocacy coalitions.",
  //   highlight: "Successfully managed legislative campaigns across 14 states simultaneously."
  // },
  {
    id: "jason-rufner",
    name: "Jason Rufner",
    // title: "Senior Director",
    location: "Front Royal, Virginia",
    bio: "Award-winning sportswriter turned strategic communications expert. 15-year journalism career with Virginia Press Association awards. Specialized in transforming complex projects into compelling public narratives, including major venue development campaigns.",
    highlight: "Fluent in Spanish, bringing multilingual communications capabilities to diverse audiences."
  },
  {
    id: "steph-donofrio",
    name: "Stephanie D'Onofrio",
    // title: "Events Manager",
    location: "Leesburg, Virginia",
    bio: "Veteran events and community engagement manager with experience spanning all three branches of government. Managed high-level events for federal, state, and local leaders, and brings a national perspective to every project. Alabama University alum with a passion for building strong communities and delivering seamless, impactful experiences.",
    highlight: "Orchestrated major events for the executive, legislative, and judicial branches of government."
  },
  {
    id: "ryan-donofrio",
    name: "Ryan D'Onofrio",
    // title: "AI & Technology Strategist",
    location: "Sacramento, California",
    bio: "AI Engineer with Masters in Dynamical Neuroscience from UC Santa Barbara. Founded multiple tech companies including FurnishEureka.com, Research Radar, and Magic Mirror. Bridges the gap between emerging technology and practical communications applications.",
    highlight: "Brings cutting-edge AI and data center expertise to modern advocacy challenges."
  }
]

export default function TeamSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Strategic Minds, Proven Results
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our diverse team combines decades of experience across communications, advocacy, 
              technology, and community engagement to deliver comprehensive solutions.
            </p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="text-center">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                          {member.name}
                        </h3>
                        {/* <p className="text-lg text-primary font-semibold mb-2">
                          {member.title}
                        </p> */}
                        <p className="text-slate-500 dark:text-slate-400">
                          {member.location}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                        {member.bio}
                      </p>

                      {/* Highlight */}
                      <div className="border-l-4 border-primary pl-6 bg-primary/5 dark:bg-primary/10 p-4 rounded-r-lg">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 italic">
                          {member.highlight}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-20 lg:mt-32"
          >
            <Card className="bg-primary/5 border-primary/20 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                  Ready to work with our team?
                </h3>
                
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                  Our diverse expertise means we can tackle any communications challenge. 
                  Let's discuss how our team can help you achieve your strategic goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/#contact"
                    className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
                  >
                    <span>Get Started</span>
                    <motion.div
                      className="w-4 h-4 border-t-2 border-r-2 border-current rotate-45 group-hover:translate-x-1 transition-transform"
                    />
                  </a>

                  <a
                    href="mailto:ddonofrio@thecaseygroup.us"
                    className="inline-flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors cursor-pointer group"
                  >
                    <span className="font-semibold">Contact David</span>
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 