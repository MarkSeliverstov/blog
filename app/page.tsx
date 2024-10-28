import Socials from "@/app/components/socials";
import Link from "next/link";

export default function Home(): Readonly<React.ReactNode> {
  return (
    <section className="h-screen">
      <div className="flex justify-center flex-col h-4/6">
        <h1 className="md:text-6xl text-5xl mb-4">Hello, I&apos;m Mark</h1>
        <Socials className="text-2xl" />
        <p className="md:text-2xl mt-8 text-lg">
          Software Engineer with a passion for back-end development and cloud
          solutions. If you would like to connect, feel free to drop me a message on
          <Link
            href="mailto:seliverstovmd@gmail.com"
            className="underline p-1 hover:text-neutral-500"
          >
            {"email"}
          </Link>
          .
        </p>
        <p className="md:text-2xl mt-4 text-lg">
          I’ve also started a
          <Link href="/blog" className="underline p-1 hover:text-neutral-500">
            {"blog"}
          </Link>
          where I share my thoughts, tips, and insights on software development.
          Feel free to check it out!
        </p>
      </div>
    </section>
  );
}
