import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Navbar } from "./components/navbar";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Providers } from "./providers";

const geistSans: NextFontWithVariable = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono: NextFontWithVariable = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Mark Seliverstov",
    template: "%s | Mark Seliverstov",
  },
  description: "Mark Seliverstov's site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} antialiased`}
      suppressHydrationWarning
    >
      <body className="max-w-2xl mx-4 mt-8 lg:mx-auto">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
