import { Tag } from "./tag";

export function Tags({
  names,
}: {
  names: string[];
}): Readonly<React.ReactNode> {
  return (
    <div className="w-full flex flex-row space-x-2 items-center pt-2">
      {names !== undefined && names.map((tag) => <Tag name={tag} key={tag} />)}
    </div>
  );
}
