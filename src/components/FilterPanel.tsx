type Props = {
  onToggleImportant?: (checked: boolean) => void;
};

function FilterPanel({ onToggleImportant }: Props) {
  return (
    <aside className="p-4 border-b">
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          onChange={(e) => onToggleImportant?.(e.target.checked)}
        />
        Show only important events
      </label>
    </aside>
  );
}
export default FilterPanel;
