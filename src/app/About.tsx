import { Separator } from "@/components/Utils";
import Button from "@/components/button";
import Image from "next/image";

export default function About() {

  return (
    <section className="grid grid-cols-2 px-36 pt-10" id="about">
      <h2 className="text-3xl font-semibold">NUESTRO SALON</h2>
      <div>
        <p className="mb-4 text-sm">Bienvenidos a Belleza Express, tu destino de belleza y bienestar en el corazón de la ciudad. En nuestra peluquería y centro de estética, nos apasiona realzar la belleza natural de nuestros clientes y brindarles una experiencia única y satisfactoria.</p>
        <Button>LEER MÁS</Button>
      </div>
      <div className="text-center col-span-2 py-10">
        <Image
          className="shadow-lg rounded transition-transform hover:scale-105"
          src="/salon.png"
          alt="salon image"
          width={1500}
          height={1500}
        />
      </div>
      <Separator />
    </section>
  );

}