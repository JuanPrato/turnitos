import TurnsTable from "./Table";

function AdminTurns() {

  return (
    <section>
      <h2 className="text-center text-3xl pt-4 mb-2">TURNOS PEDIDOS</h2>
      <div className="divider" />
      <div className="max-w-4xl mx-auto">
        <TurnsTable />
      </div>
    </section>
  )
}

export default AdminTurns;