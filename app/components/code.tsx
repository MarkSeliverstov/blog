import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import React from "react";

function get_highlighted_code(
  code: string,
  className: string | undefined,
): string {
  try {
    if (className !== undefined) {
      return hljs.highlight(code, {
        language: className.replace("language-", ""),
      }).value;
    }
    return hljs.highlightAuto(code).value;
  } catch {
    return hljs.highlight(code, { language: "plaintext" }).value;
  }
}

export default function Code(props: {
  children: string;
  className: string;
}): Readonly<React.ReactNode> {
  return React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: get_highlighted_code(props.children, props.className),
    },
  });
}
