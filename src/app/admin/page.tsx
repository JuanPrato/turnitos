"use client";

import { PasswordInput, TextInput } from "@/components/form/Input";
import Button from "@/components/button";
import { onSubmit } from "@/utils/supabase-action";
import { useRouter } from "next/navigation";
import { PATHS } from "@/utils/constants";
import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LogIn() {

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const supabase = createClientComponentClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!!session) {
        router.push(PATHS.ADMIN_DASHBOARD);
      }
    })()
  }, []);

  const submit = async (formData: FormData) => {
    const result = await onSubmit(formData);
    if (result.login) {
      router.refresh();
      router.push(PATHS.ADMIN_DASHBOARD);
    }
  }

  return (
    <section className="h-full grid place-items-center">
      <form action={submit}>
        <TextInput label="Usuario" name="user" placeholder="Sancho Panza" />
        <PasswordInput label="Contraseña" name="password" placeholder="*********" />
        <Button>ENTRAR</Button>
      </form>
    </section>
  );

}