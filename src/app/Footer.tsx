import Button from "@/components/button";
import { BackToTopButton } from "@/components/footer/BackToTop";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-black text-white p-5 box-content grid grid-cols-2">
      <section>
        <h2 className="text-xl my-2">CONTACT INFO</h2>
        <h3>🕛 Lun - Dom 9:00 AM - 19:00 PM</h3>
        <h3>🗺️ Algun lugar - CABA</h3>
        <h3>📧 algun@correo.com.ar</h3>
        <h3>📱 11 6678 - 2928</h3>
      </section>
      <div className="grid items-center">
        <BackToTopButton />
      </div>
      <Link className="text-center col-span-2" href="">ENTRAR</Link>
    </footer>
  );

}