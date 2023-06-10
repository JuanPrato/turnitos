"use client";

import { PATHS } from "@/utils/constants";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function CloseSessionButton() {

  const supabase = createClientComponentClient();
  const router = useRouter();

  const onSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push(PATHS.ADMIN_LOGIN);
  }

  return (
    <button
      className="btn btn-md w-1/2"
      onClick={onSignOut}
    >
      CERRAR SESION
    </button>
  );
}