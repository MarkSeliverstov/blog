"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme: theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [setTheme]);

  return (
    <button
      className="text-3xl"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted ? (theme === "dark" ? "🌕" : "🌑") : "🌕"}
    </button>
  );
}
