import React from "react";

export function Badge({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-800 ring-1 ring-inset ring-green-600/20" onClick={onClick}>
      {children}
    </span>
  )
}