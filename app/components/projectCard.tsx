import { Tags } from "./tags";
import Link from "next/link";
import Image from "next/image";

type props = {
  project: Project;
};

export function ProjectCard({ project }: props): Readonly<React.ReactNode> {
  return (
    <div className="break-inside-avoid mb-4">
      <Link
        key={project.title}
        className="flex flex-col space-y-1 mb-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
        href={project.link}
      >
        {project.image && (
          <Image
            width={1024}
            height={1024}
            src={project.image}
            className="rounded-t-lg object-cover h-32"
            alt={project.title}
          />
        )}
        <div className="flex flex-row">
          <div className="p-4 w-full">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 md:items-center md:justify-between">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lg">
                <span>{project.title}</span>
              </p>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {project.description}
            </p>

            <Tags names={project.tags} />
          </div>
        </div>
      </Link>
    </div>
  );
}
