"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme: theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (theme === "dark") {
    // This is a hack to fix the dark theme for code blocks
    // import "highlight.js/styles/github-dark.css";
  }

  return (
    <button
      className="text-3xl"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted ? (theme === "dark" ? "🌕" : "🌑") : "🌕"}
    </button>
  );
}
