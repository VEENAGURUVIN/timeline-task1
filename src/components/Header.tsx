import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="text-lg font-bold">Timeline App</h1>
      <button
        aria-label="Toggle dark mode"
        onClick={() => setDark(!dark)}
        className="px-3 py-2 rounded-lg bg-gray-800 text-white"
      >
        {dark ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}
