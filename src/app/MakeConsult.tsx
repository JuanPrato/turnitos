import Image from "next/image";

import { SectionTitle } from "@/components/Font";
import { EmailInput, PhoneInput, TextAreaInput, TextInput } from "@/components/form/Input";
import Button from "@/components/button";

export default function MakeConsult() {

  return (
    <div className="pt-6">
      <SectionTitle text="Haz las consultas que quieras!" />
      <div className="mt-4 grid grid-cols-2 bg-gray-200">
        <Image
          className="p-5"
          src="/herramientas.png"
          alt="herramientas"
          height={1080}
          width={1080}
        />
        <form className="flex flex-col p-5 gap-4">
          <TextInput label="Nombre completo" name="name" />
          <EmailInput label="Mail" name="mail" />
          <PhoneInput label="Telefono" name="phone" />
          <TextAreaInput label="Consulta" name="consult" />
          <Button>ENVIAR</Button>
        </form>
      </div>
    </div>
  );

}