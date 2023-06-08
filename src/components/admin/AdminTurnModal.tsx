"use client"

import { Turn } from "@/app/admin/dashboard/turns/Table";
import dayjs from "dayjs";
import { useRef } from "react";

const listFormatter = new Intl.ListFormat("es", { style: "short", type: "conjunction" });

export default function AdminTurnModal({ turn }: { turn: Turn }) {

  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className="btn btn-sm btn-warning" onClick={() => ref.current?.show()}>VER MÁS</button>
      <dialog className="modal" ref={ref}>
        <form method="dialog" className="modal-box flex flex-col gap-10 bg-gray-100">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="text-center text-xl">DETALLES DE SOLICITUD: # {turn.id}</h3>
          <fieldset className="ring ring-gray-400 px-2 rounded">
            <legend className="bg-gray-100 py-1 px-1 text-lg">DATOS DEL TURNO:</legend>
            <label className="label text-lg">FECHA:
              <p>{dayjs(turn.date).format('DD/MM/YYYY')}</p>
            </label>
            <label className="label text-lg">EMPLEADO SOLICITADO:
              <p>{turn.employee}</p>
            </label>
            <label className="label text-lg">SERVICIOS:
              <p>{listFormatter.format(turn.services)}</p>
            </label>
          </fieldset>
          <fieldset className="ring ring-gray-400 px-2 rounded">
            <legend className="bg-gray-100 py-1 px-1 text-lg">DATOS DEL CLIENTE:</legend>
            <label className="label text-lg">NOMBRE:
              <p>{turn.clientName}</p>
            </label>
            <label className="label text-lg">NÚMERO:
              <p>{turn.clientPhone}</p>
            </label>
          </fieldset>
          <div className="grid grid-cols-2 w-full gap-3">
            <button className="btn btn-success grow">ACEPTAR</button>
            <button className="btn btn-error grow">RECHAZAR</button>
            <button className="btn btn-info col-span-2">CLOSE</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>CLOSE</button>
        </form>
      </dialog>
    </>
  );

}