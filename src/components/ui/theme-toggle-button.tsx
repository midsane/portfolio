import React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

interface ThemeToggleAnimationProps {
  variant?: string
  start?: string
  showLabel?: boolean
  url?: string
}

export default function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
}: ThemeToggleAnimationProps) {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className=" cursor-pointer ease-in duration-75 relative group"
      name="Theme Toggle Button"
    >
      <SunIcon className="w-10 h-10 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute w-10 h-10 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Theme Toggle </span>
      {showLabel && (
        <>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -top-10">
            {" "}
            variant = {variant}
          </span>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -bottom-10">
            {" "}
            start = {start}
          </span>
        </>
      )}
    </Button>
  )
}
