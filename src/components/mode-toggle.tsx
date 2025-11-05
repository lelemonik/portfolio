"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-500 hover:shadow-glow group"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-700 ease-&lsqb;cubic-bezier(0.25,0.46,0.45,0.94)&rsqb; dark:-rotate-90 dark:scale-0 text-primary group-hover:rotate-[20deg]" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-700 ease-&lsqb;cubic-bezier(0.25,0.46,0.45,0.94)&rsqb; dark:rotate-0 dark:scale-100 text-primary group-hover:rotate-[110deg]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}