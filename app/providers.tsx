"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      {children}
    </NextThemesProvider>
  );
}
