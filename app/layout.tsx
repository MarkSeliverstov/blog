import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Navbar } from "./components/navbar";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Providers } from "./providers";
import { Fira_Sans } from 'next/font/google'
import Footer from "./components/footer";

const geistSans: NextFontWithVariable = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400",
});
const firaSans: NextFontWithVariable = Fira_Sans({
  variable: "--font-fira-sans",
  weight: "400",
  subsets: [],
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
      <body className="max-w-3xl mx-4 mt-8 md:mx-auto">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
