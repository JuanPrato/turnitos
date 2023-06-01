"use client"

import { ReactNode } from "react";

interface Props {
  text?: string;
  children?: ReactNode;
  size?: number;
  onClick?: () => void
}

export default function Button({ text, children, size, onClick = () => { } }: Props) {
  return (
    <button className="bg-black text-white border ring-white p-3 font-semibold transition-colors rounded-xl hover:bg-white hover:text-black group" onClick={onClick}>
      <span className="block rounded-lg transition-colors group-hover:border-black">
        {children ?? text}
      </span>
    </button>
  );
}