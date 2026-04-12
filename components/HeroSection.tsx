"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { imgPath } from "@/lib/image-path"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-[5rem] md:text-[8rem] lg:text-[10rem] font-black">CASEY GROUP</div>
      </div>
    )
  }

  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Navigation Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-6 lg:px-12 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.div
              className="cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
                <Image src={imgPath("/logos/TCG-white.png")} alt="TCG" width={100} height={100} />
                
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="hidden md:flex items-center space-x-8 lg:space-x-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { label: 'Expertise', id: 'expertise' },
                { label: 'Our Team', href: '/our-team' },
                { label: 'Clients', id: 'clients' },
                { label: 'Contact', id: 'contact' },
              ].map((item, index) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg relative group"
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                ) : (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg relative group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    />
                  </motion.button>
                )
              ))}
              {/* "In Action" page button */}
              <Link
                href="/in-action"
                className="ml-6 px-5 py-2 rounded-full font-bold text-white bg-primary shadow-lg shadow-primary/30 border-2 border-primary hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                In Action →
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2 z-50 relative"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              data-mobile-menu
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.div 
                  className="w-full h-0.5 bg-white transition-all duration-300 origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                />
                <motion.div 
                  className="w-full h-0.5 bg-white transition-all duration-300"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 20 : 0,
                  }}
                />
                <motion.div 
                  className="w-full h-0.5 bg-white transition-all duration-300 origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Overlay */}
          <motion.div
            className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" />
            
            {/* Menu content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center space-y-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: isMobileMenuOpen ? 1 : 0.9, 
                opacity: isMobileMenuOpen ? 1 : 0 
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              data-mobile-menu
            >
              {/* Navigation Links */}
              {[
                { label: 'Expertise', id: 'expertise' },
                { label: 'Our Team', href: '/our-team' },
                { label: 'Clients', id: 'clients' },
                { label: 'Contact', id: 'contact' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ 
                    y: isMobileMenuOpen ? 0 : 50, 
                    opacity: isMobileMenuOpen ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: isMobileMenuOpen ? (index + 1) * 0.1 : 0 }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-white text-3xl font-medium hover:text-primary transition-colors duration-300 block text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id!)}
                      className="text-white text-3xl font-medium hover:text-primary transition-colors duration-300 block text-center"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
              
              {/* "In Action" button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                  y: isMobileMenuOpen ? 0 : 50, 
                  opacity: isMobileMenuOpen ? 1 : 0 
                }}
                transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.5 : 0 }}
                className="pt-8"
              >
                <Link
                  href="/in-action"
                  className="px-8 py-4 rounded-full font-bold text-white bg-primary shadow-lg shadow-primary/30 border-2 border-primary hover:bg-white hover:text-primary transition-all duration-200 text-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  In Action →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </nav>
      </motion.header>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-3 h-3 bg-primary/60 rounded-full"
        animate={{
          y: [-30, 30, -30],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-accent/50 rounded-full"
        animate={{
          y: [20, -20, 20],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/40 rounded-full"
        animate={{
          y: [-15, 15, -15],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-20 flex items-center min-h-screen pl-12 md:pl-16 lg:pl-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
          {/* Left side - Main heading */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-7">
            {/* "THE" above, smaller, aligned with CASEY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <motion.span
                className="text-white block text-2xl md:text-4xl lg:text-5xl font-semibold tracking-widest pl-[0.08em] md:pl-[0.09em] lg:pl-[0.11em] xl:pl-[0.13em] 2xl:pl-[0.15em]"
                // The left padding visually aligns "THE" with the left edge of "CASEY" below
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                THE
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <motion.h1
                className="text-[4rem] md:text-[6rem] lg:text-[8.5rem] xl:text-[11rem] 2xl:text-[13rem] font-black text-white leading-[0.88] tracking-tighter"
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                CASEY
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="overflow-hidden relative"
            >
              <motion.h1
                className="text-[4rem] md:text-[6rem] lg:text-[8.5rem] xl:text-[11rem] 2xl:text-[13rem] font-black text-white leading-[0.88] tracking-tighter"
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              >
                GROUP
              </motion.h1>
              
              {/* Large animated accent circle - similar to AMPLIQ's red circle */}
              <motion.div
                className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 w-16 h-16 lg:w-24 lg:h-24 bg-primary rounded-full flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
              >
                <motion.div
                  className="w-full h-full bg-primary rounded-full relative"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  {/* Inner circle with subtle glow */}
                  <div className="absolute inset-2 bg-primary-foreground/20 rounded-full" />
                  {/* Small dot in center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-foreground rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>

          </div>

          {/* Right side - Tagline and description */}
          <div className="lg:col-span-5 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="space-y-8 lg:space-y-12"
            >
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-300 leading-tight font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
              >
                Your Strategic Communications & Advocacy Firm
              </motion.p>
              
              <motion.div
                className="w-32 lg:w-48 h-1 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              />
              
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
              >
                Define yourself, before others do it for you.
              </motion.p>

              {/* CTA or additional info */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
              >
                <button
                  onClick={() => scrollToSection('expertise')}
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group"
                >
                  <span className="text-lg font-medium">Learn More</span>
                  <motion.div
                    className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-current rounded-full"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  )
}