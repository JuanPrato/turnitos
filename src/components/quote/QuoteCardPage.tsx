"use client"

import { RefObject, useEffect, useRef } from "react"
import QuoteCard, { Quote } from "./QuoteCard";

interface Props {
  executeWithRef: (ref: RefObject<HTMLDivElement>) => void;
  quotes: [Quote, Quote?]
}

export default function QuoteCardPage({ executeWithRef, quotes }: Props) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    executeWithRef(ref);
  }, []);

  return (

    <div className="carousel-item w-full gap-3" ref={ref}>
      <QuoteCard quote={quotes[0]} />
      {quotes[1] && <QuoteCard quote={quotes[1]} />}
    </div>
  )
}