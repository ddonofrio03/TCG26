"use client"
import { useEffect } from "react"

export default function AnimationFix() {
  useEffect(() => {
    // Force all framer-motion whileInView elements to become visible
    // if they haven't already been triggered after 800ms
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[style*="opacity: 0"]')
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement
        htmlEl.style.opacity = "1"
        htmlEl.style.transform = "none"
      })
    }, 800)
    return () => clearTimeout(timer)
  }, [])
  return null
}
