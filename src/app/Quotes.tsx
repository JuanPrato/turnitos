import { SectionTitle } from "@/components/Font";
import { Separator } from "@/components/Utils";
import QuoteCarousel from "@/components/quote/QuoteCarousel";

const QUOTES: { name: string, review: string }[] = [
  {
    name: "John Doe",
    review: "Amazing experience! Loved the haircut and the friendly staff. Will definitely come back for more top-notch services.",
  },
  {
    name: "Jane Smith",
    review: "Exceptional coloring services! They achieved exactly the shade I wanted, and the result was truly spectacular. Highly recommended salon!",
  },
  {
    name: "John Doe",
    review: "Amazing experience! Loved the haircut and the friendly staff. Will definitely come back for more top-notch services.",
  },
  {
    name: "Jane Smith",
    review: "Exceptional coloring services! They achieved exactly the shade I wanted, and the result was truly spectacular. Highly recommended salon!",
  },
]

export default function Quotes() {

  return (
    <>
      <section className="py-10 px-20">
        <SectionTitle text="OPINIONES DE NUESTROS CLIENTES" />
        <QuoteCarousel quotes={QUOTES} />
      </section>
      <Separator />
    </>
  );
}