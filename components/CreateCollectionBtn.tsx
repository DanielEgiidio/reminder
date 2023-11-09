"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Plus from "./icons/Plus";
import CreateCollectionSheet from "./CreateCollectionSheet";

const CreateCollectionBtn = () => {
  const [open, setOpen] = useState(true);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div className="w-full rounded-md bg-gradient-to-r from-purple-600 to-purple-700 p-[1px] ">
      <Button
        variant={"outline"}
        className="dark:text-white w-full dark:bg-neutral-950 bg-white p-5 animate-gradient"
      >
        <span className="lg:text-2xl mr-1 font-bold bg-gradient-to-r from-purple-600 to-purple-700 text-transparent bg-clip-text hover:cursor-pointer active:border-[from-purple-600 to-purple-700]">
          Criar Lembrete
        </span>
        <Plus color="#9131e7" />
      </Button>

      <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  );
};

export default CreateCollectionBtn;
