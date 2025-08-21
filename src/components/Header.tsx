function Header() {
  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <h2 className="text-xl font-semibold">My Timeline</h2>
      <button aria-label="Toggle theme">🌙</button>
    </header>
  );
}
export default Header;
