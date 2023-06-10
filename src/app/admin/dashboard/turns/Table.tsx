import AdminTurnModal from "@/components/admin/AdminTurnModal";
import { getTurns } from "@/utils/supabase-server";
import dayjs from "dayjs";

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