import AdminTurnModal from "@/components/admin/AdminTurnModal";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { cookies } from "next/headers";

export type Turn = { id: number, employee: string, services: string[], date: string, clientName: string, clientPhone: string };

async function getTurns(): Promise<Turn[]> {

  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) return [];

  const { data, error } = await supabase.from("turn").select(`
    id,
    employee,
    created_at,
    service ( id, description ),
    clients ( dni, name, phone )
  `);

  if (!data || error) {
    throw new Error(error.message);
  }

  return data.map((t) => ({
    id: t.id,
    date: t.created_at!,
    employee: t.employee,
    services: t.service.map((s) => s.description!),
    clientName: t.clients?.name!,
    clientPhone: t.clients?.phone!,
  }));
}

export default async function TurnsTable() {

  const turns = await getTurns();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>DIA</th>
          <th>EMPLEADO</th>
          <th>CLIENTE: NOMBRE</th>
          <th>CLIENTE: CELULAR</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          turns.map(turn => (
            <tr key={turn.id} className="font-semibold transition-colors hover:bg-gray-400">
              <td>{dayjs(turn.date).format('DD/MM/YYYY')}</td>
              <td>{turn.employee}</td>
              <td>{turn.clientName}</td>
              <td>{turn.clientPhone}</td>
              <td><AdminTurnModal turn={turn} /></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );

}