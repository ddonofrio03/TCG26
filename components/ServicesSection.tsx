/* ──────────────────────────────────────────────────────────────
   components/ServicesSection.tsx
   Re-creates the full “(Services)” section from ampliq.webflow.io,
   including subtitle reveal, 3-D flip cards, and decorative lines.

   ▸ TailwindCSS v3+ (arbitrary values used for perspective / skew)
   ▸ framer-motion  v11  →  `pnpm add framer-motion`
   ▸ next/image domain  →  next.config.js:
       images: { domains: ["cdn.prod.website-files.com"] }

   Author: Ryan’s AI pair-programmer
──────────────────────────────────────────────────────────────────*/
"use client"

import { FC, ReactElement } from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

/* ----------------------------------------------
   Static data  (identical assets + copy)
---------------------------------------------- */
interface Service {
  id: string
  number: string
  title: string
  href: string
  img1: string
  img2: string
}

const services: Service[] = [
  {
    id: "branding",
    number: "S / 001",
    title: "Branding",
    href: "/services/branding",
    img1:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/683575e1bc212e5f4cb98bde_Rectangle%2019.png",
    img2:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/683575e8b9f30cd49e0b90d6_Rectangle%2034626248.png",
  },
  {
    id: "uiux",
    number: "S / 002",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    img1:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/682870a0d320006671acd730_Rectangle%2034626248.png",
    img2:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/6828703ff9165ea007e3757d_Rectangle%2019.png",
  },
  {
    id: "development",
    number: "S / 003",
    title: "Development",
    href: "/services/development",
    img1:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/6835769b2b385bd18be034d7_Rectangle%2034626250.png",
    img2:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/6835769ed37a79fe190fa311_Rectangle%2034626254.png",
  },
  {
    id: "consultancy",
    number: "S / 004",
    title: "Consultancy",
    href: "/services/consultancy",
    img1:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/683577ace3f1fe7848bba002_Rectangle%2034626252.png",
    img2:
      "https://cdn.prod.website-files.com/68286e00f729d7cf364401af/683577afa658d269bfa0690e_Rectangle%2034626263.png",
  },
]

/* ----------------------------------------------
   Animation variants
---------------------------------------------- */
const subtitleFx: Variants = {
  hidden: { y: "120%", skewY: 5, opacity: 0 },
  show: {
    y: "0%",
    skewY: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.65, 0.05, 0.36, 1] },
  },
}

const flipFront: Variants = {
  rest: { y: "0%", rotateX: 0 },
  hover: {
    y: "-100%",
    rotateX: 90,
    transition: { duration: 0.4, ease: [0.65, 0.05, 0.36, 1] },
  },
}
const flipBack: Variants = {
  rest: { y: "100%", rotateX: -90 },
  hover: {
    y: "0%",
    rotateX: 0,
    transition: { duration: 0.4, ease: [0.65, 0.05, 0.36, 1] },
  },
}

/* ----------------------------------------------
   Component
---------------------------------------------- */
const ServicesSection: FC = (): ReactElement => {
  try {
    return (
      <section
        id="services"
        className="services-section relative overflow-hidden py-24"
      >
        {/* decorative vertical lines */}
        <span className="pointer-events-none absolute left-0 top-0 h-full w-px bg-neutral-800/50" />
        <span className="pointer-events-none absolute right-0 top-0 h-full w-px bg-neutral-800/50" />

        <div className="container mx-auto px-4">
          {/* subtitle */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            variants={subtitleFx}
            className="mb-10 overflow-hidden text-center"
          >
            <p className="services-subtitle inline-block text-lg font-medium uppercase tracking-widest text-neutral-400">
              (Services)
            </p>
          </motion.div>

          {/* services grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    )
  } catch (err) {
    console.error("ServicesSection rendering error:", err)
    return (
      <section className="py-24 text-center">
        <p className="text-red-500">
          Oops — couldn’t load services right now.
        </p>
      </section>
    )
  }
}

/* ----------------------------------------------
   Service card (3-D flip + image crossfade)
---------------------------------------------- */
function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ perspective: 1000 }}
      className="group relative cursor-pointer overflow-hidden rounded-lg"
    >
      {/* image cross-fade */}
      <Image
        src={service.img1}
        alt=""
        fill
        priority
        sizes="(max-width:1024px) 100vw, 25vw"
        quality={80}
        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src={service.img2}
        alt=""
        fill
        sizes="(max-width:1024px) 100vw, 25vw"
        quality={80}
        className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* dark overlay for readability */}
      <span className="absolute inset-0 bg-black/60" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
        <span className="service-count-number text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.number}
        </span>

        <motion.a
          href={service.href}
          variants={{ hover: {} }} // anchor participates in hover context
          className="mt-auto block"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h2
            variants={flipFront}
            className="face pointer-events-none text-2xl font-semibold"
          >
            {service.title}
          </motion.h2>
          <motion.h2
            variants={flipBack}
            className="face pointer-events-none text-2xl font-semibold"
          >
            {service.title}
          </motion.h2>
        </motion.a>
      </div>

      {/* shared face styles */}
      <style jsx>{`
        .face {
          @apply absolute inset-0 flex items-end;
        }
      `}</style>
    </motion.article>
  )
}

export default ServicesSection
