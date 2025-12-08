"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      setTheme("system")
    }
  }, [])

  // Update resolved theme based on system preference or stored preference
  useEffect(() => {
    if (!mounted) return

    const htmlElement = document.documentElement
    let finalTheme: "light" | "dark"

    if (theme === "system") {
      finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } else {
      finalTheme = theme
    }

    setResolvedTheme(finalTheme)

    // Update DOM - ensure class is properly toggled
    if (finalTheme === "dark") {
      htmlElement.classList.add("dark")
    } else {
      htmlElement.classList.remove("dark")
    }

    // Also update data attribute for better CSS targeting
    htmlElement.setAttribute("data-theme", finalTheme)

    // Persist to localStorage
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return { theme, resolvedTheme, toggleTheme, mounted }
}
