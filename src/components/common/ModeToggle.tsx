// components/mode-toggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/Button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-12 rounded-full flex items-center justify-center hover:text-teal-400 dark:hover:text-teal-300"
    >
      {resolvedTheme === "light" ? (
        <Moon
          className="h-[1.2rem] w-[1.2rem] "
          onClick={() => setTheme("dark")}
        />
      ) : (
        <Sun
          className="h-[1.2rem] w-[1.2rem] "
          onClick={() => setTheme("light")}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
