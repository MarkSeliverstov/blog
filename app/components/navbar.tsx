"use client";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwither";
import { usePathname } from "next/navigation";

const navItems: Record<string, { name: string, available: boolean }> = {
  "/blog": {
    name: "blog",
    available: true,
  },
  "/projects": {
    name: "projects",
    available: false,
  },
  "/cv": {
    name: "cv",
    available: false,
  },
  "/contacts": {
    name: "contacts",
    available: false,
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
            {Object.entries(navItems).map(([path, { name, available }]) => {
              // if (!navItems[path].available) {
              //   return 
              // }
              return (
                <Link
                  key={path}
                  href={available ? path : currPath}
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
                      : "text-neutral-500") + (navItems[path].available ? "" : " cursor-not-allowed")
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
