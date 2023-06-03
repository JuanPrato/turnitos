import { cookies } from "next/headers";
import Link from "next/link";
import CloseButton from "./CloseButton";

export default function Header() {

  const log = cookies().get('log')?.value === 'true';

  console.log(log);
  return (
    <header className="p-2 bg-black grid grid-cols-3 items-center place-content-center text-white">
      <Link href="/" className="w-full p-3 text-xl font-semibold cursor-pointer"><h1>Belleza Express</h1></Link>
      <h2 className="text-center text-2xl">PANEL DE ADMINISTRADOR</h2>
      <div className="flex justify-end">
        {
          !log ?
            (
              <Link className="btn btn-md w-1/2" href="/admin">INGRESAR</Link>
            ) :
            (
              <CloseButton />
            )
        }
      </div>
    </header>
  )
}