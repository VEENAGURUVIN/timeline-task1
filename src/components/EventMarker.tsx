interface EventMarkerProps {
  event: { year: string; title: string; description: string };
  isActive: boolean;
  onClick: () => void;
  onKeyNav: (e: React.KeyboardEvent, index: number) => void;
  index: number;
}

export default function EventMarker({ event, isActive, onClick, onKeyNav, index }: EventMarkerProps) {
  return (
    <button
      onClick={onClick}
      onKeyDown={(e) => onKeyNav(e, index)}
      aria-current={isActive ? "step" : undefined}
      className={`px-3 py-2 rounded-full ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {event.year}
    </button>
  );
}
