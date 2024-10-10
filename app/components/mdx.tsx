import { MDXRemote } from "next-mdx-remote/rsc";

import Code from "./code";
import Link from "next/link";
import React from "react";

function CustomLink(props: {
  href: string;
  children: React.ReactNode;
}): React.ReactElement {
  const { href, children, ...rest } = props;

  if (href.startsWith("/")) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

function RoundedImage({
  alt,
  ...rest
}: {
  alt: string;
  src: string;
}): React.ReactElement {
  return (
    <span>
      <img alt={alt} {...rest} />
      {alt && <span className="image-caption">[{alt}]</span>}
    </span>
  );
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }): React.ReactElement => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  img: RoundedImage,
  a: CustomLink,
  code: Code,
};

export function CustomMDX(props: any): React.ReactElement { // eslint-disable-line
  return <MDXRemote {...props} components={components} />;
}
