import { EventoEvent } from "@/lib/types";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";

type EventsListProps = {
  city: string;
};
export default async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-4 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
