import { ReactNode } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AdminLayout({ children }: { children: ReactNode }) {

  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Nav session={session} />
      <div className="grow bg-gray-300">
        {children}
      </div>
    </div>
  )

}