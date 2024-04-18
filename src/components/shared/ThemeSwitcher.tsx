"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")} className="hidden dark:inline">
        <FiSun className="dark:text-white text-xl" />
      </button>
      <button onClick={() => setTheme("dark")} className="inline dark:hidden">
        <FiMoon className="dark:text-white text-xl" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
