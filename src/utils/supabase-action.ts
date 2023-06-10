"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { PATHS } from "./constants";

export async function onSubmit(formData: FormData) {
  const user = formData.get("user") as string;
  const pass = formData.get("password") as string;
  const supabase = createServerActionClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.signInWithPassword({
    email: user,
    password: pass,
  });
  revalidatePath(PATHS.ADMIN);
  return {
    login: !!session,
  };
}
