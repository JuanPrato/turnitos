import { twMerge } from "tailwind-merge"

export function SectionTitle({ text, className }: { text: string, className?: string }) {
  return (
    <h2 className={twMerge("text-center text-3xl font-semibold", className)}>{text}</h2>
  )
}