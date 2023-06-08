import Link from "next/link";
import CloseSessionButton from "@/components/admin/CloseSessionButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function HeaderActionButton() {

  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    return <CloseSessionButton />;
  }

  return (
    <Link
      href="/admin"
      className="btn btn-md w-1/2"
    >INGRESAR</Link >
  );

}