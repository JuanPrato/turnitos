import { ReactNode } from "react";

interface Props {
  text?: string;
  children?: ReactNode;
  size?: number;
}

export default function Button({ text, children, size }: Props) {
  return (
    <button className="bg-black text-white p-1 font-semibold transition-colors hover:bg-white hover:text-black group">
      <span className="p-3 block border transition-colors group-hover:border-black">
        {children ?? text}
      </span>
    </button>
  );
}