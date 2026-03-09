"use client"

import { useEffect, useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    const element = document.getElementById("waitlist-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <span className="text-xl font-bold text-accent">FamilyBridge</span>
        <button
          onClick={scrollToForm}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
        >
          先行登録する
        </button>
      </nav>
    </header>
  )
}
