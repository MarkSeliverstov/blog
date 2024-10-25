"use client";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwither";
import { usePathname } from "next/navigation";

const navItems: Record<string, { name: string; href?: string }> = {
  "/": {
    name: "whoami",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
  // "/assets/pdfs/resume.pdf": {
  //   name: "resume",
  // },
  // "/contacts": {
  //   name: "contacts",
  // },
};

export function Navbar(): Readonly<React.ReactNode> {
  const currPath = usePathname();
  const isActive = (path: string): boolean =>
    path === "/" ? currPath === "/" : currPath.startsWith(path);

  return (
    <aside className="mb-8">
      <div className="flex flex-row items-center justify-between">
        <nav
          className="
            flex 
            flex-row 
            uppercase text-sm 
            font-semibold
            text-neutral-600 dark:text-neutral-300
          "
          id="nav"
        >
          <div className="flex flex-row space-x-2 md:space-x-4 pt-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target={name === "resume" ? "_blank" : undefined}
                  className={
                    `
                    hover:text-neutral-900 dark:hover:text-neutral-100
                    hover:underline
                    text-neutral-500
                    underline-offset-4
                    rounded-md 
                    text-base
                    md:text-lg
                  ` +
                    (isActive(path)
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500")
                  }
                >
                  <span>{name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
