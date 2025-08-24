import EventMarker from "./EventMarker";
import { useState, useRef } from "react";
import EventModal from "./EventModal";

const events = [
  { year: "2000", title: "Y2K", description: "The millennium bug scare" },
  { year: "2004", title: "Facebook", description: "Launch of Facebook" },
  { year: "2007", title: "iPhone", description: "Apple releases iPhone" },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleKeyNav = (e: React.KeyboardEvent, index: number) => {
    const markers = document.querySelectorAll<HTMLButtonElement>(".marker-btn");
    if (e.key === "ArrowRight") {
      e.preventDefault();
      markers[index + 1]?.focus();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      markers[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-4 items-center justify-center mt-6">
      {events.map((event, i) => (
        <EventMarker
          key={event.year}
          event={event}
          isActive={activeIndex === i}
          onClick={() => {
            triggerRef.current = document.activeElement as HTMLElement;
            setActiveIndex(i);
          }}
          onKeyNav={handleKeyNav}
          index={i}
        />
      ))}

      {activeIndex !== null && (
        <EventModal
          event={events[activeIndex]}
          onClose={() => setActiveIndex(null)}
          triggerRef={triggerRef}
        />
      )}
    </div>
  );
}
