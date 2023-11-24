"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import CreateCollectionSheet from "./CreateCollectionSheet";

function CreateCollectionBtn() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div
      className="
    w-full rounded-md bg-[#9333e9] p-[1px]"
    >
      <Button
        variant={"outline"}
        className="dark:text-white w-full dark:bg-neutral-950 bg-white"
        onClick={() => setOpen(true)}
      >
        <span className="bg-[#9333e9] bg-clip-text text-transparent">
          Criar Lista
        </span>
      </Button>
      <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default CreateCollectionBtn;
