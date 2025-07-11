"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoom" | "zoomIn" | "zoomOut"
  delay?: number
  duration?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 600,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`

    if (!isVisible) {
      switch (animation) {
        case "fade":
          return `${baseClasses} opacity-0`
        case "slideUp":
          return `${baseClasses} opacity-0 translate-y-8`
        case "slideDown":
          return `${baseClasses} opacity-0 -translate-y-8`
        case "slideLeft":
          return `${baseClasses} opacity-0 translate-x-8`
        case "slideRight":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "zoom":
        case "zoomIn":
          return `${baseClasses} opacity-0 scale-95`
        case "zoomOut":
          return `${baseClasses} opacity-0 scale-105`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
