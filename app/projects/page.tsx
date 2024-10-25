import type { Metadata } from "next";
import { projects } from "@/app/projects/data";
import { ProjectCard } from "@/app/components/projectCard";

export const metadata: Metadata = { title: "Blog" };

export default function Page(): Readonly<React.ReactNode> {
  return (
    <section className="min-h-screen">
      <p className="text-neutral-900 dark:text-neutral-100 text-lg mb-4">
        These are some of the projects I&apos;ve worked on.
      </p>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
