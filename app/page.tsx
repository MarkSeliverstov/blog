export default function Home(): Readonly<React.ReactNode> {
  return (
    <section className="h-screen">
      <div className="flex justify-center flex-col h-4/6">
        <h1 className="md:text-6xl text-4xl">Hello, I&apos;m Mark</h1>
        <p className="md:text-2xl mt-4 text-lg">
          Software Engineer with a passion for back-end development and cloud
          solutions. If you’re looking to contact me, please see how to get in
          touch and the ways I’m available to help.
        </p>
        <p className="md:text-2xl mt-4 text-lg">
          Also, I have a
          <a
            href="/blog"
            className="underline p-1 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            {"blog"}
          </a>
          where I just started to write my thoughts, tricks and other stuff
          about software development .
        </p>
      </div>
    </section>
  );
}
