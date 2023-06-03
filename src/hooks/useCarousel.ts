import { RefObject, useRef, useState } from "react";

export function useCarousel<T extends HTMLElement>({
  offsetLeft: min,
  offsetRigth: max,
}: {
  offsetLeft: number;
  offsetRigth: number;
}) {
  const [elements, setElements] = useState<RefObject<T>[]>([]);
  const [current, setCurrent] = useState<number>(min);

  function scrollTo(index: number) {
    elements[index].current?.scrollIntoView({
      block: "nearest",
      inline: "center",
    });
  }

  return {
    onScroll(scroll: number) {
      if (current === min && scroll < 0) return;
      if (current === elements.length - max && scroll > 0) return;
      scrollTo(current + scroll);
      setCurrent((c) => (c += scroll));
    },
    absoluteScroll(scroll: number) {
      if (scroll < min || scroll > elements.length - max) return;

      setCurrent(scroll);
      scrollTo(scroll);
    },
    setElements,
    current,
  };
}
