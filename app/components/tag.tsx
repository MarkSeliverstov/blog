export function Tag({ name }: { name: string }): Readonly<React.ReactNode> {
  return (
    <span
      key={name}
      className="gray-tag cursor-default text-xs"
    >
      {name}
    </span>
  );
}
