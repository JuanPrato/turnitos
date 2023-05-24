import { Employee } from "@/app/Staff"

interface Props {
  employee: Employee;
}

export default function StaffCard({ employee }: Props) {
  return (
    <div
      className="aspect-[9/12] p-2 w-1/4 relative shadow-lg bg-cover flex flex-col justify-between items-start transition-transform hover:scale-105"
      style={{ backgroundImage: "url(/staff.png)" }}
    >
      <div className="bg-black text-white text-center p-2 absolute -top-2 -left-2">
        <h4 className="font-semibold text-lg">{employee.name}</h4>
        <h5 className="font-light text-sm">{employee.specialty}</h5>
      </div>
    </div>
  )
}