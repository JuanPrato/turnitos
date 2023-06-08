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
      className="flex flex-col gap-4 text-gray-300 bg-black p-16 rounded-lg max-w-xl mx-auto bg-opacity-70"
    >
      <SectionTitle text="AGENDA TU TURNO" className="pb-5 border-b border-white" />
      <TextInput label="NOMBRE:" name="name" placeholder="Juan Manuel Pranto" />
      <PhoneInput label="CELULAR DE CONTACTO:" name="phone" placeholder="1159882634" />
      <MultipleSelectInput label="SERVICIOS:" name="services" />
      <MultipleSelectInput label="PROFESIONAL:" name="employee" disabled />
      <legend className="font-bold">DIA Y HORARIO:</legend>
      <div className="grid gap-5 md:grid-cols-2">
        <CalendarInput label="DIA" name="day" />
        <SelectInput label="HORARIO" name="time" disabled />
      </div>
      <legend className="font-bold">DIA Y HORARIO ALTERNATIVO:</legend>
      <div className="grid gap-5 md:grid-cols-2">
        <CalendarInput label="DIA" name="day" />
        <SelectInput label="HORARIO" name="time" disabled />
      </div>
      <div className="border-t border-white pt-5 flex flex-col">
        <Button>ENVIAR</Button>
      </div>
    </form>
  );
}