import { UserButton } from "@clerk/nextjs";
import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className=" dark:bg-[#27272a] flex w-full items-center justify-between p-4 h-[60px]">
      <Logo />
      <div className="flex fap-4 items-center">
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
