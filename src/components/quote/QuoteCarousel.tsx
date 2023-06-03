"use client"

import { useCarousel } from "@/hooks/useCarousel";
import QuoteCardPage from "./QuoteCardPage";
import { ReactNode } from "react";
import { Quote } from "./QuoteCard";
import { twMerge } from "tailwind-merge";

export default function QuoteCarousel({ quotes }: { quotes: Quote[] }) {

  let pagesQ = 0;

  const { current, setElements, absoluteScroll } = useCarousel({ offsetLeft: 0, offsetRigth: 1 });

  const getQuotesPages = () => {
    const pages: ReactNode[] = [];
    for (let i = 0; i < quotes.length; i += 2) {
      pages.push(
        <QuoteCardPage
          key={i}
          quotes={[quotes[i], quotes[i + 1]]}
          executeWithRef={(q) => setElements(p => [...p, q])} />
      )
    }
    pagesQ = pages.length;
    return pages;
  }

  return (
    <>
      <div className="carousel gap-1 mt-6">
        {
          getQuotesPages()
        }
      </div>
      <div className="flex justify-center w-full pt-2 gap-2">
        {
          Array.from({ length: pagesQ }).map((_, i) => <button key={i} className={twMerge("btn btn-xs", `${current === i && "btn-active"}`)} onClick={() => absoluteScroll(i)}>{i + 1}</button>)
        }
      </div>
    </>
  )
}