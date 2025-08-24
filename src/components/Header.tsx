import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header
      className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800"
      role="banner"
    >
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Timeline App
      </h1>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
        className="px-3 py-1 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}
