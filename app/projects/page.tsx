import type { Metadata } from "next";
import { projects } from "@/app/projects/data";
import { ProjectCard } from "@/app/components/projectCard";

export const metadata: Metadata = { title: "Projects" };

export default function Page(): Readonly<React.ReactNode> {
  return (
    <section className="min-h-screen">
      <p className="text-neutral-900 dark:text-neutral-100 text-lg mb-4">
        These are some of the projects I&apos;ve worked on.
      </p>
      <div className="columns-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
