import { Session } from "@supabase/supabase-js";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type MaybeSession = Session | null;

export function useSession() {
  const [supabase, setSupabase] = useState(() => create);
  const [session, setSession] = useState<MaybeSession>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function logIn() {
    await supabase.auth.signInWithPassword({
      email: "juan@juan.com",
      password: "123",
    });
    router.push("/admin/dashboard");
  }

  async function logOut() {
    await supabase.auth.signOut();
    router.push("/admin");
  }

  return {
    session,
    logIn,
    logOut,
  };
}
