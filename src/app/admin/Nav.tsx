import { PATHS } from "@/utils/constants";
import { Session } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Nav({ session }: { session: Session | null }) {

  if (!session) return;

  return (
    <nav className="p-2 bg-black grid grid-cols-3 items-center place-content-center text-white">
      <Link href={PATHS.ADMIN_DASHBOARD}>PETICIONES</Link>
      <Link href={PATHS.ADMIN_CALENDAR}>CALENDARIO DE TURNOS</Link>
    </nav>
  )
}