import { Tag } from "./tag";

export function Tags({
  names,
}: {
  names: string[];
}): Readonly<React.ReactNode> {
  return (
    <div className="flex flex-row flex-wrap gap-2 items-center pt-2">
      {names !== undefined && names.map((tag) => <Tag name={tag} key={tag} />)}
    </div>
  );
}
