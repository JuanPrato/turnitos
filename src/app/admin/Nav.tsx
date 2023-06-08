import Link from "next/link";

export default function Nav() {

  return (
    <nav className="p-2 bg-black grid grid-cols-3 items-center place-content-center text-white">
      <Link href="/admin/dashboard/">PETICIONES</Link>
    </nav>
  )
}