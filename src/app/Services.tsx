import { SectionTitle } from "@/components/Font"
import ServiceCard from "@/components/ServiceCard"
import { Separator } from "@/components/Utils"

const SERVICES = [
  "Corte y estilo",
  "Estética facial",
  "Manicura y pedicura",
  "Reparación capilar"
]

export default function Services() {

  return (
    <section className="px-20">
      <SectionTitle text="NUESTROS SERVICIOS" />
      <div className="flex gap-3 py-10">
        {
          SERVICES.map((s, i) => (<ServiceCard key={i} name={s} />))
        }
      </div>
      <Separator />
    </section>
  )

}