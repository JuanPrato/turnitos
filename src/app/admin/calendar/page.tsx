import { getTurns } from "@/utils/supabase-server";
import dayjs from "dayjs";
import { ReactNode } from "react";

function Tile({ text }: { text: string }) {
  return (
    <div className="p-2 h-[100px] border border-black">
      {text}
    </div>
  )
}

function HourTile({ text }: { text: string }) {
  return (
    <div className="text-xl border border-black grid place-items-center">{text}</div>
  )
}

export default async function AdminCalendar() {

  const turns = await getTurns();
  const drawTiles = () => {
    const tiles: ReactNode[] = [];

    let time = dayjs().startOf("week").startOf("day").add(8, "hours");
    let hour = dayjs().startOf("day").add(8, "hours");

    const tilesQuantity = 8 * 9;
    const rowLength = 8;

    tiles.push(<Tile text="" />);

    for (let i = 1; i < tilesQuantity; i++) {
      if (i < rowLength) {
        tiles.push(<Tile text={`${days[time.day()]} - ${time.format("DD/MM")}`} />);
        time = time.add(1, "day");
        continue;
      }
      if (i % rowLength === 0) {
        time = time.add(-2, "day").startOf("week");
      }
      if (i >= rowLength && i % rowLength === 0) {
        tiles.push(<HourTile text={`${hour.format("HH:mm")} - ${hour.add(1, "hour").format("HH:mm")}`} />);
        hour = hour.add(1, "hour");
        continue;
      }
      const turn = turns.find(t =>
        dayjs(t.date).isSame(time, "day") &&
        (
          dayjs(t.date).hour() === hour.hour() ||
          (hour.isBefore(dayjs(t.endDate)))
        ));
      tiles.push(<Tile text={`${turn?.clientName || ""}\n${turn?.employee || ""}`} />);
      time = time.add(1, "day");
    }

    return tiles;
  }

  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

  return (
    <div>
      <h1>CALENDAR</h1>
      <section className="grid grid-cols-8 font-semibold">
        {
          drawTiles()
        }
      </section>
    </div>
  );

}