import { Turn, getTurns } from "@/utils/supabase-server";
import dayjs, { Dayjs } from "dayjs";
import es from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData"
import { ReactNode } from "react";

dayjs.locale(es);
dayjs.extend(localeData);

const TILE_DIM = "h-[100px] w-[175px]";
const DAY_TILE_DIM = "h-[75px] w-[175px]";

const createClassNames = (styles: string | string[]): string => {
  if (typeof styles === "string") {
    return styles;
  }
  return styles.join(" ");
}

function DayTile({ time }: { time?: Dayjs }) {
  return (
    <div className={createClassNames([DAY_TILE_DIM, "p-2 relative border-b border-gray-200 grid place-items-center"])}>
      {time ? `${time.format("ddd DD").toUpperCase()}` : ""}
    </div>
  );
}

function DateTile({ turn }: { turn: Turn }) {

  const hours = dayjs(turn.endDate).hour() - dayjs(turn.date).hour();

  return (
    <div className={createClassNames([TILE_DIM, "p-2 relative border border-gray-200"])}>
      <div className={createClassNames([`min-h-[${hours * 100}px]`, "card shadow-xl bg-white z-10 border-t-4 border-blue-400 p-2 flex flex-col"])}>
        <div className="">
          <p className="">CLIENTE:</p>
          <p>{turn.clientName}</p>
        </div>
        <div className="flex-grow">
          <p className="mt-2">EMPLEADO:</p>
          <p>{turn.employee}</p>
        </div>
        <p className="text-xs text-gray-400">{dayjs(turn.date).format("HH:mm")}-{dayjs(turn.endDate).format("HH:mm")}</p>
      </div>
    </div>
  );
}

function Tile({ text }: { text: string }) {
  return (
    <div className={createClassNames([TILE_DIM, "p-2 relative border border-gray-200"])}>
      {text}
    </div>
  )
}

function HourTile({ text }: { text: string }) {
  return (
    <div className={createClassNames([TILE_DIM, "p-2 relative border-r border-gray-200 font-normal text-gray-500 grid place-items-center"])}>
      {text}
    </div>
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

    tiles.push(<DayTile time={undefined} />);

    for (let i = 1; i < tilesQuantity; i++) {
      if (i < rowLength) {
        tiles.push(<DayTile time={time} />);
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
      tiles.push(turn ? <DateTile turn={turn} /> : <Tile text="" />);
      time = time.add(1, "day");
    }

    return tiles;
  }

  return (
    <div>
      <h1>CALENDAR</h1>
      <section className="grid grid-cols-8 w-[1400px] mx-auto font-semibold bg-white">
        {
          drawTiles()
        }
      </section>
    </div>
  );

}