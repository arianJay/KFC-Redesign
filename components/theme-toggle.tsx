"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button disabled className="p-2 rounded-lg" aria-label="Loading theme">
        <div className="w-6 h-6 bg-muted animate-pulse rounded" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
    >
      {resolvedTheme === "light" ? (
        <Moon size={24} className="text-foreground" />
      ) : (
        <Sun size={24} className="text-foreground" />
      )}
    </button>
  )
}
