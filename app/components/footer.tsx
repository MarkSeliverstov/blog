import Socials from "@/app/components/socials";
import { siteMetadata } from "@/app/sitemap";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mt-16 mb-4 p-4 rounded-lg flex flex-col items-center bg-neutral-100 dark:bg-neutral-900 text-neutral-500">
      <Socials className="text-2xl pb-4" />
      <p className="font-sm">Maintained by Mark Seliverstov</p>
      <div className="flex items-center space-x-2">
      <p className="mt-0">© {new Date().getFullYear()} MIT Licensed</p>
      <span>•</span>
      <a
        className="flex items-center hover:text-blue-500"
        rel="noopener noreferrer"
        target="_blank"
        href={siteMetadata.sourceCodeUrl}
      >
        <MdArrowOutward />
        <p className="ml-1">view source</p>
      </a>
      </div>
    </footer>
  );
}
