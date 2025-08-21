import { useState } from "react";
import EventMarker from "./EventMarker";
import EventModal from "./EventModal";

type Event = { id: number; date: string; title: string; description: string };

const DUMMY_EVENTS: Event[] = [
  { id: 1, date: "2024-01-10", title: "Project Start", description: "Kickoff meeting." },
  { id: 2, date: "2024-03-02", title: "MVP Ready", description: "First release shipped." },
  { id: 3, date: "2024-06-15", title: "Public Launch", description: "We went live!" },
];

function Timeline() {
  const [selected, setSelected] = useState<Event | null>(null);

  return (
    <div className="p-4">
      <div className="border-l pl-6">
        {DUMMY_EVENTS.map(ev => (
          <div key={ev.id} className="flex items-center gap-4">
            <EventMarker
              label={ev.title}
              onClick={() => setSelected(ev)}
            />
            <div className="py-4">
              <div className="text-sm text-gray-500">{ev.date}</div>
              <div className="font-medium">{ev.title}</div>
            </div>
          </div>
        ))}
      </div>

      <EventModal
        open={!!selected}
        title={selected?.title}
        onClose={() => setSelected(null)}
      >
        <p className="text-sm text-gray-700">{selected?.description}</p>
        <p className="text-xs mt-2 text-gray-500">Date: {selected?.date}</p>
      </EventModal>
    </div>
  );
}
export default Timeline;
