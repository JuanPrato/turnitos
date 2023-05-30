"use client"

import { SectionTitle } from "@/components/Font";
import { Separator } from "@/components/Utils";
import Button from "@/components/button";
import { TextInput, PhoneInput, MultipleSelectInput, CalendarInput, SelectInput } from "@/components/form/Input";

interface IForm {
  name: string;
  phone: string;
  services: string[];
  day: Date;
  time: Date;
}

export default function Form() {

  return (
    <form
      className="flex flex-col gap-4 bg-gray-400 p-5 rounded-lg max-w-xl mx-auto bg-opacity-70 ring ring-black"
    >
      <SectionTitle text="AGENDA TU TURNO" />
      <Separator />
      <TextInput label="NOMBRE" name="name" />
      <PhoneInput label="CELULAR DE CONTACTO" name="phone" />
      <div>
        <MultipleSelectInput label="SERVICIOS" name="services" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <CalendarInput label="ELIGE TU DIA" name="day" />
        <SelectInput label="HORARIO DE INICIO" name="time" disabled />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <CalendarInput label="ELIGE TU DIA ALTERNATIVO" name="day" />
        <SelectInput label="HORARIO ALTERNATIVO" name="time" disabled />
      </div>
      <Button>ENVIAR</Button>
    </form>
  );
}