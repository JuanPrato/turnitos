"use client"

import { redirect } from "next/navigation";

export default function CloseButton() {

  const closeSession = () => {
    redirect('/admin');
  }

  return (
    <button
      className="btn btn-md w-1/2"
      onClick={() => closeSession()}>
      CERRAR SESION
    </button>
  );

}