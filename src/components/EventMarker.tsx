type Props = { label?: string; onClick?: () => void };

function EventMarker({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-4 h-4 rounded-full my-4 border"
      title={label}
    />
  );
}
export default EventMarker;
