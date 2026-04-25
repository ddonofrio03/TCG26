"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { imgPath } from "@/lib/image-path"

const NAV_ITEMS = [
  { label: "Expertise", id: "expertise" },
  { label: "Our Team", href: "/our-team" },
  { label: "Clients", id: "clients" },
  { label: "TCG Insights", href: "/blog" },
  { label: "Contact", id: "contact" },
]

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest("[data-mobile-menu]"))
        setIsMobileMenuOpen(false)
    }
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // account for fixed nav
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <section id="home" className="min-h-screen w-full relative overflow-hidden bg-slate-900">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          src={imgPath("/videos/hero.mp4")}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Vignette at edges */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)"
        }} />
      </div>

      {/* NAVIGATION */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollToSection("home")} className="cursor-pointer">
              <Image
                src={imgPath("/logos/TCG-white.png")}
                alt="TCG"
                width={100}
                height={40}
                style={{ height: "auto" }}
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {NAV_ITEMS.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-lg relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-lg relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
              <Link
                href="/in-action"
                className="ml-6 px-5 py-2 rounded-full font-bold text-white bg-primary shadow-lg shadow-primary/30 border-2 border-primary hover:bg-white hover:text-primary transition-all duration-200"
              >
                In Action →
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-mobile-menu
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className="w-full h-0.5 bg-white transition-all duration-300 origin-center block"
                  style={{ transform: isMobileMenuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
                <span className="w-full h-0.5 bg-white transition-all duration-300 block"
                  style={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
                <span className="w-full h-0.5 bg-white transition-all duration-300 origin-center block"
                  style={{ transform: isMobileMenuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — rendered outside <header> so the header's
          backdrop-filter (when scrolled) does not become the containing
          block for this fixed element and clip it. */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-md flex flex-col justify-center items-center space-y-8"
          data-mobile-menu
        >
          {NAV_ITEMS.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-3xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id!)}
                className="text-white text-3xl font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            )
          )}
          <Link
            href="/in-action"
            className="px-8 py-4 rounded-full font-bold text-white bg-primary border-2 border-primary hover:bg-white hover:text-primary transition-all text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            In Action →
          </Link>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-end pb-28 pt-32">

        {/* Giant hero type */}
        <div className="mb-6">
          <span className="text-white/90 text-xl md:text-3xl font-semibold tracking-[0.3em] uppercase block mb-1">
            The
          </span>
          <h1 className="font-black text-white leading-[0.85] tracking-tighter"
            style={{ fontSize: "clamp(5rem, 16vw, 14rem)" }}>
            CASEY<br />GROUP
          </h1>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-white mb-8" />

        {/* Tagline below the name */}
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-snug mb-4">
            Your Strategic Communications<br />&amp; Advocacy Firm
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
            Define yourself, before others do it for you.
          </p>

          <div className="flex items-center space-x-3 text-white/60">
            <span className="text-sm font-semibold tracking-widest uppercase">Keep Scrolling to Learn More</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent z-10" />
    </section>
  )
}
