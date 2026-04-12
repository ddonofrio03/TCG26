"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const caseStudies = [
  {
    id: "66-express",
    title: "66 Express Outside the Beltway",
    subtitle: "TCG spearheaded the PR efforts of a public/private mega project in Northern Virginia",
    category: "Infrastructure & Transportation",
    situation: "A privately financed dynamic-toll roadway serving the Northern Virginia region hired TCG to provide expertise in strategic communications, media monitoring, social media listening, political outreach, and both media and public relations.",
    approach: "Applying our skills in grassroots advocacy, crisis response management, and crafting accessible communications strategies – combined with our knowledge of the key players in the region's media and politics – we developed a systemized routine which closely monitors the local mediascape (including traditional and social media) to identify trending topics and public sentiment.",
    results: [
      "TCG successfully produced and publicized a major Grand Opening event featuring Virginia Gov. Glenn Youngkin among a host of local, state, and federal dignitaries, attracting a bevy of interest from the media and the public.",
      "TCG launched a campaign – through social media, marketing materials, and story placements in local media – to educate drivers (from commuters to businesses) about their new travel option and the reliability it provides.",
      "We also produce proactive communications to promote our client's key messaging, manage incoming media inquiries, and advise our client on strategic responses to control the narrative and encourage positive sentiment."
    ],
    featured: true,
    image: "/stories/66.jpg"
  },
  {
    id: "bank-of-america",
    title: "Bank of America & Merrill",
    subtitle: "TCG represented a nationwide team in the greater Washington DC market",
    category: "Financial Services",
    situation: "Bank of America needed to enhance its visibility and amplify its corporate voice across multiple regional levels. Via an intermediary firm, they hired TCG to help secure earned-media mentions, stories and appearances while augmenting their corporate reputation and exposure in Washington DC.",
    approach: "Working with the highest levels of each company's leadership, TCG successfully led the effort to make the corporate message relatable to the average person and served as a go-to source for media inquiries.",
    results: [
      "Using our professional spokespersons and stories crafted with either timeless or DC-centric themes, TCG secured the needed media appearances for this Fortune 100 company",
      "Focused on regional broadcast TV and radio appearances and coverage in the Washington Business Journal, Washington Post and other national publications of similar stature.",
      "We conducted media training for the leadership in the DC market and prepared them for difficult questions and situations that the might encounter.",
      "Created a regular feature with key advisors on local TV sharing financial tips and humanizing the BofA and Merrill brand."
    ],
    image: "/stories/bofa.avif"
  },
  {
    id: "ford-motor",
    title: "Ford Motor Company",
    subtitle: "TCG placed stories across the Washington DC media market",
    category: "Automotive & Technology",
    situation: "Ford Motor Company was searching for a local Washington DC firm to assist their efforts to promote the brand and share its innovative approaches to the emerging technology and EV advancements they were making.",
    results: [
      "TCG successfully placed dozens of stories promoting Ford and the brand.",
      "Key stories included around the annual Washington DC Auto Show, hands-free driving safety, EVs and more.",
      "Built deep relationships with influential car bloggers in the Greater DC area and had numerous stories placed highlighting Ford and its products like the F-150 Lightning."
    ],
    image: "/stories/ford-in-dc.webp"
  },
  {
    id: "loudoun-rail",
    title: "Loudoun Rail Now",
    subtitle: "TCG lead the team that turned the tide on Rail to Loudoun County",
    category: "Public Advocacy",
    situation: "The Washington Metropolitan Area Transit Authority (Metro) system is in the midst of its largest expansion ever. Without Loudoun County's support, the project would have been delayed for years or potentially scuttled ending short of the airport.",
    approach: "We responded immediately by surveying residents about the public perception of this issue and to identify key opposition messages that resonated best among local citizens.",
    results: [
      "Having started in late March of 2012 Loudoun Rail Now was the critical element to the July 3, 2012, vote for Loudoun County to remain a part of this project.",
      "Supporters outnumbered opponents 4-to-1 at the critical public hearing",
      "Over 7,000 signed petitions were collected from door-to-door efforts and events (double the largest of any other petition on record)",
      "Hundreds of emails and Facebook messages were received by the all-Republican Loudoun County Board. The social media debate was dominated by LRN supporters",
      "We dominated with public appearances of strength with dozens of supporters wearing green 'Loudoun Rail Now' shirts we made and distributed."
    ],
    image: "/stories/rail.jpg"
  },
  {
    id: "att",
    title: "AT&T",
    subtitle: "TCG became the key link between Fortune 100 company and the community",
    category: "Telecommunications",
    situation: "AT&T, a major International telecommunications company had a previous application in Loudoun County that was withdrawn after significant and vocal community opposition. The project was unorganized and poorly messaged and their corporate reputation damaged.",
    approach: "Our goal is to make lines of communication on the project clear and to engage both supporters and opposition.",
    results: [
      "The Casey Group has already identified over a dozen key business supporters as well as made contact with critical government officials, both who could influence and ultimately make the decision.",
      "Identifying supporters, like the local Chamber of Commerce and technology advocates as well as local businesses who stand to benefit, is central to the task."
    ],
    image: "/stories/ATT.jpg"
  }
]

export default function CaseStudies() {
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
              Success Stories That Define Excellence
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From Fortune 100 companies to grassroots campaigns, we deliver results that matter.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-20 lg:space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <Badge variant="outline" className="text-xs font-medium">
                      {study.category}
                    </Badge>
                    
                    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                      {study.title}
                    </h3>
                    
                    <p className="text-lg lg:text-xl text-primary font-semibold leading-relaxed">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Situation */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Their Situation
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {study.situation}
                    </p>
                  </div>

                  {/* Approach (if exists) */}
                  {study.approach && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Our Approach
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                  )}

                  {/* Results */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Our Results
                    </h4>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {result}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="bg-slate-200 dark:bg-slate-800 border-0 overflow-hidden group cursor-pointer h-96 lg:h-[500px]">
                    <CardContent className="p-0 h-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-8">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover w-full h-full"
                            sizes="(max-width: 1024px) 100vw, 500px"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
            <Card className="bg-primary/5 border-primary/20 backdrop-blur-sm max-w-3xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                  Ready to write your success story?
                </h3>
                
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                  Every challenge is an opportunity. Let's discuss how we can help you achieve 
                  measurable results that matter.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/#contact"
                    className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
                  >
                    <span>Start Your Project</span>
                    <motion.div
                      className="w-4 h-4 border-t-2 border-r-2 border-current rotate-45 group-hover:translate-x-1 transition-transform"
                    />
                  </a>

                  <a
                    href="mailto:ddonofrio@thecaseygroup.us"
                    className="inline-flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors cursor-pointer group"
                  >
                    <span className="font-semibold">Discuss Your Goals</span>
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