"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { imgPath } from "@/lib/image-path"

const NAV_ITEMS = [
  { label: "Expertise", href: "/#expertise" },
  { label: "Our Team", href: "/our-team" },
  { label: "Clients", href: "/#clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
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
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50"
          : "bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src={imgPath("/logos/TCG-white.png")}
              alt="TCG"
              width={100}
              height={40}
              style={{ height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/in-action"
              className="ml-6 px-5 py-2 rounded-full font-bold text-white bg-primary shadow-lg shadow-primary/30 border-2 border-primary hover:bg-white hover:text-primary transition-all duration-200"
            >
              In Action →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className="w-full h-0.5 bg-white transition-all duration-300 block"
                style={{ transform: isMobileMenuOpen ? "rotate(45deg) translateY(6px)" : "none" }}
              />
              <span
                className="w-full h-0.5 bg-white transition-all duration-300 block"
                style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <span
                className="w-full h-0.5 bg-white transition-all duration-300 block"
                style={{ transform: isMobileMenuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden bg-slate-900/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-3xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
  )
}
