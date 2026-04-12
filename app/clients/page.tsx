"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const clientCategories = {
  sports: [
    {
      name: "Loudoun Hounds",
      industry: "Sports",
      description: "Professional sports team advocacy and community engagement initiatives."
    },
    {
      name: "Virginia Calvary",
      industry: "Sports",
      description: "Sports organization strategic communications and fan engagement programs."
    },
    {
      name: "NASL",
      industry: "Sports",
      description: "Professional soccer league advocacy and regulatory support."
    },
    {
      name: "San Jose Earthquake",
      industry: "Sports",
      description: "Major League Soccer team strategic communications and community relations."
    },
    {
      name: "Cannonball",
      industry: "Sports",
      description: "Sports organization public affairs and strategic planning initiatives."
    }
  ],
  realEstate: [
    {
      name: "The Carlyle Group",
      industry: "Project Management/Real Estate",
      description: "Land use planning and regulatory navigation for major real estate developments."
    },
    {
      name: "The Mills Corporation",
      industry: "Large Real Estate Developer",
      description: "Comprehensive advocacy and community relations for large-scale development projects."
    },
    {
      name: "Sunrise Senior Living",
      industry: "Real Estate",
      description: "Senior living facility development and community engagement strategies."
    },
    {
      name: "Comstock Real Estate",
      industry: "Real Estate",
      description: "Real estate development advocacy and community planning initiatives."
    },
    {
      name: "The Peterson Companies",
      industry: "Real Estate",
      description: "Commercial and residential real estate development strategic communications."
    },
    {
      name: "Kettler",
      industry: "Real Estate",
      description: "Multi-family residential development and community relations programs."
    },
    {
      name: "Clark Realty Capital",
      industry: "Real Estate",
      description: "Real estate investment and development strategic advisory services."
    },
    {
      name: "Lexington Seven",
      industry: "Real Estate",
      description: "Real estate development project management and regulatory compliance."
    }
  ],
  miscellaneous: [
    {
      name: "Bank of America",
      industry: "Financial Services",
      description: "Strategic communications and regulatory advocacy for one of the nation's largest financial institutions."
    },
    {
      name: "I66 Outside the Beltway",
      industry: "Communications/Major Toll Road Operator",
      description: "Public engagement and community outreach for major transportation infrastructure projects."
    },
    {
      name: "Merrill Lynch",
      industry: "Financial Services",
      description: "Communications strategy and advocacy for wealth management and investment services."
    },
    {
      name: "AT&T",
      industry: "Telecommunications & Cell Tower",
      description: "Infrastructure advocacy and community engagement for telecommunications expansion."
    },
    {
      name: "Ford Motor Company",
      industry: "Automotive",
      description: "Strategic communications and advocacy for automotive industry initiatives."
    },
    {
      name: "HCA",
      industry: "Health Care Land Use",
      description: "Healthcare facility development and regulatory compliance guidance."
    },
    {
      name: "Loudoun Rail Now",
      industry: "Transportation Advocacy",
      description: "Public transportation advocacy and community engagement initiatives."
    },
    {
      name: "Invisible Towers",
      industry: "Telecommunications Infrastructure",
      description: "Cell tower and telecommunications infrastructure planning and advocacy."
    },
    {
      name: "Mil-tek",
      industry: "Technology",
      description: "Technology sector strategic communications and regulatory affairs."
    },
    {
      name: "Loudoun Youth",
      industry: "Community Organization",
      description: "Youth organization advocacy and community engagement programs."
    }
  ]
}

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6"
            >
              Our Clients
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto"
            >
              Trusted by organizations across sports, real estate, and diverse industries 
              to deliver strategic communications and advocacy solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Clients by Category */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Sports Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  Sports
                </h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto" />
              </div>
              
              <div className="space-y-6">
                {clientCategories.sports.map((client, index) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {client.name}
                        </h3>
                        <Badge variant="secondary" className="mb-4 text-sm bg-blue-100 text-blue-800">
                          {client.industry}
                        </Badge>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {client.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Real Estate Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  Real Estate
                </h2>
                <div className="w-16 h-1 bg-emerald-600 mx-auto" />
              </div>
              
              <div className="space-y-6">
                {clientCategories.realEstate.map((client, index) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {client.name}
                        </h3>
                        <Badge variant="secondary" className="mb-4 text-sm bg-emerald-100 text-emerald-800">
                          {client.industry}
                        </Badge>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {client.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* miscellaneous Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  Miscellaneous
                </h2>
                <div className="w-16 h-1 bg-purple-600 mx-auto" />
              </div>
              
              <div className="space-y-6">
                {clientCategories.miscellaneous.map((client, index) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {client.name}
                        </h3>
                        <Badge variant="secondary" className="mb-4 text-sm bg-purple-100 text-purple-800">
                          {client.industry}
                        </Badge>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {client.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20 lg:mt-32"
          >
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-12 lg:p-16 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Join Our Client Family?
                </h2>
                <p className="text-xl lg:text-2xl opacity-90 mb-8">
                  Let's discuss how we can help you achieve your strategic goals.
                </p>
                <Link href="/#contact">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="px-8 py-4 text-lg font-semibold"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 