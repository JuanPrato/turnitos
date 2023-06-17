import { getTurns } from "@/utils/supabase-server";

import Calendar from "./Calendar";
import SelectWeek from "./SelectWeek";

export default async function AdminCalendar() {

  const turns = await getTurns();

  return (
    <div>
      <h1>CALENDAR</h1>
      <SelectWeek />
      <Calendar turns={turns} />
    </div>
  );

}