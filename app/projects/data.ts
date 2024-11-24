import { baseUrl } from "@/app/sitemap";

export const projects: Project[] = [
  {
    title: "Linking Software Artifacts",
    description:
      "Bachelor's thesis on using comment-based annotations to mark key software artifacts for purposes like code analysis, domain model construction, and developer assistance. Includes CLI tool, VSCode extension, and web vizualization.",
    tags: ["TypeScript", "Python", "Vue"],
    link: "https://github.com/MarkSeliverstov/MFF-bachelor-work",
  },
  {
    title: "Echolalia",
    description:
      "Echolalia - the mobile application designed to help users practice and learn words in a foreign language. Echolalia is built on the principle of repeated repetition and training, making it an effective tool for language learners of all levels.",
    tags: ["C#", "Xamarin"],
    link: "https://github.com/MarkSeliverstov/Echolalia",
  },
  {
    title: "Dotfiles automation",
    description:
      "Dotfiles for my development environment, including configurations for Vim, Zsh, and Tmux as well as a setup script.",
    tags: ["Bash"],
    link: "https://github.com/MarkSeliverstov/.dotfiles",
  },
  {
    title: "Blog",
    description:
      "Personal website where I write about programming, technology, and other topics.",
    tags: ["React", "TypeScript", "Next.js"],
    link: baseUrl,
  },
  {
    title: "Telegram Finance Manager",
    description:
      "Telegram bot for managing personal finances. Allows users to track expenses, income, and account balances. The main feature is the ability to send commands to the bot via voice messages. The bot uses AI to recognize the user's voice and process the command.",
    tags: ["Python", "PostgreSQL", "AI", "Speech Recognition"],
    link: "https://github.com/MarkSeliverstov/tfm",
  },
];
