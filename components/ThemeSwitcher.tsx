"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //macete para evitar hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border dark:border-neutral-800 dark:bg-[#27272a]">
        <TabsTrigger
          value="light"
          className="light"
          onClick={(e) => setTheme("light")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          className="dark"
          onClick={(e) => setTheme("dark")}
        >
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90" />
        </TabsTrigger>
        <TabsTrigger
          value="system"
          className="system"
          onClick={(e) => setTheme("system")}
        >
          <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
