"use client"

import { useEffect, useState } from "react"

interface ScrollIndicatorProps {
  text?: string
  targetId?: string
  className?: string
  hideOnScroll?: boolean
}

export default function ScrollIndicator({
  text = "Scroll to learn more",
  targetId,
  className = "",
  hideOnScroll = true,
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!hideOnScroll) return

    const handleScroll = () => {
      setIsVisible(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hideOnScroll])

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center gap-2 text-muted-foreground transition-opacity duration-300 hover:text-foreground ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      } ${className}`}
      aria-label="Scroll down"
    >
      {text && (
        <span className="text-xs tracking-widest uppercase">{text}</span>
      )}
      <svg
        className="h-5 w-5 animate-bounce"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </button>
  )
}
