import { sourceCodeUrl } from "@/app/sitemap";
import { BuyMeCoffee } from "@/app/components/buyMeCoffee";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 mb-4 p-4 rounded-lg flex flex-col items-center bg-neutral-100 dark:bg-neutral-900 text-neutral-500">
      <p className="font-sm">Maintained by Mark Seliverstov</p>

      <BuyMeCoffee />

      <ul className="font-sm flex text-neutral-500 flex-row space-x-4">
        <li>
          <a
            className="flex items-center hover:text-blue-500"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-blue-500"
            rel="noopener noreferrer"
            target="_blank"
            href={sourceCodeUrl}
          >
            <ArrowIcon />
            <p className="ml-2">view source</p>
          </a>
        </li>
      </ul>
      <div className="flex flex-row">
        <p className="mt-0">© {new Date().getFullYear()} MIT Licensed</p>
        <span className="mx-2">•</span>
        <a href="/privacy" className="mt-0 hover:text-blue-500">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
