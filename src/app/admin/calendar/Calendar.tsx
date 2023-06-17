import { Turn } from "@/utils/supabase-server";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData"
import es from "dayjs/locale/es";
import { ReactNode } from "react";

dayjs.locale(es);
dayjs.extend(localeData);

const TILE_DIM = "h-[75px] w-[175px]";
const DAY_TILE_DIM = "h-[75px] w-[175px]";

const HEIGH_PX = 75;

const createClassNames = (styles: string | string[]): string => {
  if (typeof styles === "string") {
    return styles;
  }
  return styles.join(" ");
}

function getStartObjects(from?: Dayjs): { day: Dayjs, hour: Dayjs } {

  const f = from ? from : dayjs();

  return {
    day: f.startOf("week").startOf("day"),
    hour: f.startOf("week").startOf("day").add(8, "hours")
  }
}

function restartWeek(day: Dayjs): Dayjs {
  return day.add(-2, "day").startOf("week");
}

function matchTime(time1: Dayjs, day: Dayjs, hour: Dayjs) {
  return time1.isSame(day, "day") &&
    time1.hour() === hour.hour();
}

function isHourTile(current: number, total: number): boolean {
  return current % total === 0;
}

function shouldAddAHour(current: number, total: number) {
  return current % total === total - 1;
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
      <div className={createClassNames([`min-h-[${hours * HEIGH_PX}px]`, "card shadow-xl bg-white z-10 border-t-4 border-blue-400 p-2 flex flex-col"])}>
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

function Tile({ text }: { text?: string }) {
  return (
    <div className={createClassNames([TILE_DIM, "p-2 relative border border-gray-200"])}>
      {text}
    </div>
  )
}

function HourTile({ hour }: { hour: Dayjs }) {
  return (
    <div className={createClassNames([TILE_DIM, "p-2 relative border-r border-gray-200 font-normal text-gray-500 grid place-items-center"])}>
      {`${hour.format("HH:mm")} - ${hour.add(1, "hour").format("HH:mm")}`}
    </div>
  )
}

interface Props {
  turns: Turn[],
  from?: Dayjs
}

export default function Calendar({ turns, from }: Props) {
  const drawTiles = () => {
    const tiles: ReactNode[] = [];

    let { day, hour } = getStartObjects(from);

    const cols = 8;
    const rows = 9;
    const tilesQuantity = cols * rows;

    tiles.push(<DayTile />);

    for (let i = 1; i < tilesQuantity; i++) {
      if (i < cols) {
        tiles.push(<DayTile time={day} />);
        day = day.add(1, "day");
        continue;
      }

      if (isHourTile(i, cols)) {
        day = restartWeek(day);
        tiles.push(<HourTile hour={hour} />);
        continue;
      }

      if (shouldAddAHour(i, cols)) {
        hour = hour.add(1, "hour");
      }

      const turn = turns.find(t => matchTime(dayjs(t.date), day, hour));
      tiles.push(turn ? <DateTile turn={turn} /> : <Tile />);
      day = day.add(1, "day");
    }

    return tiles;
  }

  return (
    <section className="grid grid-cols-8 w-[1400px] mx-auto font-semibold bg-white">
      {
        drawTiles()
      }
    </section>
  )

}