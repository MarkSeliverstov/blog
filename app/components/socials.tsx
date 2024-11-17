import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import { siteMetadata } from "@/app/sitemap";

function createSocialLink(
  Icon: React.ComponentType,
  href: string,
): Readonly<React.ReactNode> {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500"
    >
      <Icon />
    </a>
  );
}

export default function Socials({
  className,
}: ClassNameProps): Readonly<React.ReactNode> {
  return (
    <div className={"flex flex-row space-x-2 " + className}>
      {createSocialLink(SiTelegram, siteMetadata.socials.telegram)}
      {createSocialLink(SiLinkedin, siteMetadata.socials.linkedin)}
      {createSocialLink(SiGithub, siteMetadata.socials.github)}
    </div>
  );
}
