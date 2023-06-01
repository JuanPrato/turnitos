import { SectionTitle } from "@/components/Font";
import StaffCard from "@/components/StaffCard";
import { Separator } from "@/components/Utils";

export type Employee = {
  name: string;
  specialty: string;
}

const STAFF: Employee[] = [
  {
    name: "María López",
    specialty: "Cuts and coloring",
  },
  {
    name: "Carlos Rodríguez",
    specialty: "Versatile stylist",
  },
  {
    name: "Ana Torres",
    specialty: "Coloring and highlights",
  },
];

export default function Staff() {
  return (
    <>
      <section className="py-10" id="staff">
        <SectionTitle text="NUESTRO EQUIPO" />
        <div className="flex justify-center gap-5 pt-5">
          {
            STAFF.map((e, i) => (<StaffCard key={i} employee={e} />))
          }
        </div>
      </section>
      <Separator />
    </>
  )
}