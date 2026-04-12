"use client"
import { useEffect } from "react"

export default function AnimationFix() {
  useEffect(() => {
    // Immediately make all framer-motion elements visible on mount
    const fix = () => {
      document.querySelectorAll<HTMLElement>('[style*="opacity: 0"], [style*="opacity:0"]').forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
    }
    fix()
    // Run again after a short delay to catch any late renders
    const t1 = setTimeout(fix, 300)
    const t2 = setTimeout(fix, 800)
    const t3 = setTimeout(fix, 1500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])
  return null
}
