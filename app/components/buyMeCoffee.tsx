import { SiBuymeacoffee } from "react-icons/si";
import { siteMetadata } from "@/app/sitemap";

export function BuyMeCoffee(): Readonly<React.ReactNode> {
  return (
    <div className="flex flex-row">
      <a
        className="flex h-fit items-center hover:text-blue-500 mb-4 text-neutral-600 dark:text-neutral-400 dark:hover:text-blue-500"
        rel="noopener noreferrer"
        target="_blank"
        href={siteMetadata.socials.buyMeCoffee}
      >
        <SiBuymeacoffee />
        <p className="ml-1">buy me a coffee</p>
      </a>
    </div>
  );
}
