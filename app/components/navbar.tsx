"use client";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwither";
import { usePathname } from "next/navigation";

const navItems: Record<string, { name: string }> = {
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
  "/cv": {
    name: "cv",
  },
  "/contacts": {
    name: "contacts",
  },
};

export function Navbar(): Readonly<React.ReactNode> {
  const currPath = usePathname();
  console.log(currPath);
  const isActive = (path: string): boolean => currPath.startsWith(path);
  return (
    <aside className="mb-8">
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/"
          className={
            `
            hover:text-neutral-900 dark:hover:text-neutral-100
            flex flex-row 
            text-2xl
            md:text-4xl font-semibold uppercase
          ` +
            (currPath === "/"
              ? "text-neutral-900 dark:text-white"
              : "text-neutral-500")
          }
        >
          mark.seliverstov.dev
        </Link>
        <ThemeSwitcher />
      </div>
      <div>
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
          <div className="flex flex-row space-x-2 pt-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={
                    `
                    hover:text-neutral-900 dark:hover:text-neutral-100
                    text-neutral-500
                    underline
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
      </div>
    </aside>
  );
}
