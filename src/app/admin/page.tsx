import { PasswordInput, TextInput } from "@/components/form/Input";
import Button from "@/components/button";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LogIn() {

  async function onSubmit(formData: FormData) {
    "use server";
    const user = formData.get("user") as string;
    const pass = formData.get("password") as string;
    const supabase = createServerActionClient({ cookies });
    await supabase.auth.signInWithPassword({ email: user, password: pass });
    revalidatePath("/admin");
    redirect("/admin/dashboard");
  }

  return (
    <section className="h-full grid place-items-center">
      <form action={onSubmit}>
        <TextInput label="Usuario" name="user" placeholder="Sancho Panza" />
        <PasswordInput label="Contraseña" name="password" placeholder="*********" />
        <Button>ENTRAR</Button>
      </form>
    </section>
  );

}