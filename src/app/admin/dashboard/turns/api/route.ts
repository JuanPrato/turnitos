import dayjs from "dayjs";
import { NextResponse } from "next/server";

const TURNS = [
  {
    id: 1,
    date: Date.now,
    employee: "Juan",
    services: ["Alisado", "Alisado doble"],
    clientName: "Juan Manuel Proto",
    clientPhone: "1120392923",
  },
  {
    id: 2,
    date: Date.now,
    employee: "Jorge",
    services: ["Alisado", "Alisado doble"],
    clientName: "Juan Manuel Proto",
    clientPhone: "1120392923",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(TURNS);
}
