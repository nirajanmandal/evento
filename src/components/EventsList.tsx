import { EventoEvent } from "@/lib/types";
import EventCard from "./EventCard";

type EventsListProps = {
  events: EventoEvent[];
};
export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-4 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
