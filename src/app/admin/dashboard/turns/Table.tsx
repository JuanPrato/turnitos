import AdminTurnModal from "@/components/admin/AdminTurnModal";
import dayjs, { Dayjs } from "dayjs";
import { use } from "react";


export type Turn = { id: number, employee: string, services: string[], date: number, clientName: string, clientPhone: string };

async function getTurns(): Promise<Turn[]> {
  const res = await fetch("http://localhost:3000/admin/dashboard/turns/api");

  const data = await res.json();
  return data;
}

export default function TurnsTable() {

  const turns = use(getTurns());

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
            <tr key={turn.id} className="hover:bg-gray-400">
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