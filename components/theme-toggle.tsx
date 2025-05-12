"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative h-9 w-9 rounded-full border-navy/20 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 hover:bg-orange/10 dark:hover:bg-orange/20"
        >
          <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 text-orange transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 text-navy dark:text-orange transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-medium">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4 text-orange" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
          <Moon className="mr-2 h-4 w-4 text-navy dark:text-orange" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
          <span className="mr-2">💻</span>
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
