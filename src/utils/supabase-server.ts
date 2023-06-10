import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export type Turn = {
  id: number;
  employee: string;
  services: string[];
  date: string;
  endDate: string;
  clientName: string;
  clientPhone: string;
};

export async function getTurns(): Promise<Turn[]> {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return [];

  const { data, error } = await supabase.from("turn").select(`
    id,
    employee,
    created_at,
    start_at,
    end_at,
    service ( id, description ),
    clients ( dni, name, phone )
  `);

  if (!data || error) {
    throw new Error(error.message);
  }

  return data.map((t) => ({
    id: t.id,
    date: t.start_at!,
    endDate: t.end_at!,
    employee: t.employee,
    services: t.service.map((s) => s.description!),
    clientName: t.clients?.name!,
    clientPhone: t.clients?.phone!,
  }));
}
