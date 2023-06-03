"use client"

import { Employee } from "@/app/Staff"
import { RefObject, useEffect, useRef } from "react";

interface Props {
  employee: Employee;
  executeWithRef: (ref: RefObject<HTMLDivElement>) => void
}

export default function StaffCard({ employee, executeWithRef }: Props) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    executeWithRef(ref);
  }, []);

  return (
    <div
      className="carousel-item aspect-[9/12] p-2 h-[400px] relative shadow-lg bg-cover flex flex-col justify-between items-start transition-transform"
      style={{ backgroundImage: "url(/staff.png)" }}
      ref={ref}
    >
      <div className="bg-black text-white text-center p-2 absolute -top-2 -left-2">
        <h4 className="font-semibold text-lg">{employee.name}</h4>
        <h5 className="font-light text-sm">{employee.specialty}</h5>
      </div>
    </div>
  )
}