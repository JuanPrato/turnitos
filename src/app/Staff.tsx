"use client"

import { SectionTitle } from "@/components/Font";
import StaffCard from "@/components/StaffCard";
import { Separator } from "@/components/Utils";
import { useCarousel } from "@/hooks/useCarousel";
import React, { Ref, RefObject, useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";

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
  {
    name: "Ana Torres",
    specialty: "Coloring and highlights",
  },
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
  {
    name: "Ana Torres",
    specialty: "Coloring and highlights",
  },
];

export default function Staff() {

  const { setElements, onScroll } = useCarousel<HTMLDivElement>({ offsetLeft: 1, offsetRigth: 2 });

  return (
    <>
      <section className="py-10 px-20 relative" id="staff">
        <SectionTitle text="NUESTRO EQUIPO" />
        <div className="carousel carousel-center flex gap-5 pt-5 px-3">
          {
            STAFF.map((e, i) => (
              <StaffCard
                key={i}
                employee={e}
                executeWithRef={(r) => setElements(rs => [...rs, r])} />
            ))
          }
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button className="btn btn-circle" onClick={() => onScroll(-1)}>❮</button>
          <button className="btn btn-circle" onClick={() => onScroll(+1)}>❯</button>
        </div>
      </section>
      <Separator />
    </>
  )
}