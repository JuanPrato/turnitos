import { PasswordInput, TextInput } from "@/components/form/Input";
import Header from "./Header"
import Button from "@/components/button";
import { cookies } from "next/headers";

export default function LogIn() {

  async function logIn(data: FormData) {
    'use server';

    console.log(data);
    const user = data.get("user");
    const pass = data.get("password");

    cookies().set('log', 'true');

  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <section className="grow bg-gray-300 grid place-items-center">
        <form action={logIn}>
          <TextInput label="Usuario" name="user" placeholder="Sancho Panza" />
          <PasswordInput label="Contraseña" name="password" placeholder="*********" />
          <Button>ENTRAR</Button>
        </form>
      </section>
    </div>
  );

}