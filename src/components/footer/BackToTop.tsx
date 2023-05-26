"use client"

import Button from "../button";

export function BackToTopButton() {
  return (
    <Button onClick={() => window?.scrollTo({ top: 0, behavior: "smooth" })}>Volver arriba</Button>
  )
}