export function Tag({ name }: { name: string }): Readonly<React.ReactNode> {
  return (
    <span
      key={name}
      className="text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-2 py-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
    >
      {name}
    </span>
  );
}
