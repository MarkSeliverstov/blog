import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "404" };

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </section>
  );
}
