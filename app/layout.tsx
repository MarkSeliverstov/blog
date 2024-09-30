import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "./components/navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="text-black bg-white dark:text-white dark:bg-black max-w-xl mx-4 mt-8 lg:mx-auto">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
