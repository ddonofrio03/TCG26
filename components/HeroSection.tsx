"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { imgPath } from "@/lib/image-path"

const NAV_ITEMS = [
  { label: "Expertise", id: "expertise" },
  { label: "Our Team", href: "/our-team" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" },
]

// Pexels free video clips: community meetings, press conferences, public advocacy
const VIDEOS = [
  "https://videos.pexels.com/video-files/7103562/7103562-sd_640_360_25fps.mp4",
  "https://videos.pexels.com/video-files/6951811/6951811-sd_640_360_25fps.mp4",
  "https://videos.pexels.com/video-files/8847926/8847926-sd_640_360_25fps.mp4",
  "https://videos.pexels.com/video-files/6952251/6952251-sd_640_360_25fps.mp4",
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cycle videos every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEOS.length)
    }, 8000)
    return () => clearInterval(timer)
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
      document.body.style.overflow = "unset"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsMobileMenuOpen(false)
  }

  return (
    <section id="home" className="min-h-screen w-full relative overflow-hidden bg-slate-900">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === currentVideo ? 1 : 0 }}
          />
        ))}
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-slate-900/70" />
        {/* Subtle color tint matching brand */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-transparent to-blue-900/30" />
      </div>

      {/* NAVIGATION */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50"
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
                    className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
              <Link
                href="/in-action"
                className="ml-6 px-5 py-2 rounded-full font-bold text-white bg-primary shadow-lg shadow-primary/30 border-2 border-primary hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
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
                <span
                  className="w-full h-0.5 bg-white transition-all duration-300 origin-center"
                  style={{
                    transform: isMobileMenuOpen
                      ? "rotate(45deg) translateY(6px)"
                      : "none",
                  }}
                />
                <span
                  className="w-full h-0.5 bg-white transition-all duration-300"
                  style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <span
                  className="w-full h-0.5 bg-white transition-all duration-300 origin-center"
                  style={{
                    transform: isMobileMenuOpen
                      ? "rotate(-45deg) translateY(-6px)"
                      : "none",
                  }}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 md:hidden bg-slate-900/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8"
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
        </nav>
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-4xl">
          {/* THE CASEY GROUP */}
          <div className="mb-8">
            <span className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold tracking-widest block mb-2">
              THE
            </span>
            <h1 className="text-[4rem] md:text-[6.5rem] lg:text-[9rem] font-black text-white leading-[0.88] tracking-tighter">
              CASEY
              <br />
              GROUP
            </h1>
          </div>

          {/* Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-blue-400 mb-8" />

          {/* Tagline text BELOW the name */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-200 font-light leading-tight mb-6 max-w-2xl">
            Your Strategic Communications &amp; Advocacy Firm
          </p>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
            Define yourself, before others do it for you.
          </p>

          <button
            onClick={() => scrollToSection("expertise")}
            className="inline-flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors group"
          >
            <span className="text-lg font-medium">Learn More</span>
            <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 bg-current rounded-full" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10" />

      {/* Video dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentVideo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentVideo ? "bg-primary w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
