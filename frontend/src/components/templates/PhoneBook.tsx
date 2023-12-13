import React from "react";
import { cn } from "@/lib/utils";

import { BookUser, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormTrigger } from "@/components/organisms/ContactFormTrigger";
import { ContactTable } from "@/components/organisms/ContactTable";
import { ContactItemProps } from "@/components/organisms/ContactItem";

interface IPhoneBookData {
  success: boolean;
  message: string;
  data: ContactItemProps[];
}

async function getPhoneBookData() {
  const res = await fetch("http://localhost:8080/contacts", {
    cache: "no-store",
  });

  return res.json() as Promise<IPhoneBookData>;
}

export const PhoneBook = async () => {
  const { data } = await getPhoneBookData();

  return (
    <section
      className={cn(
        "flex flex-col gap-8 items-center w-[1116px] h-[90%] bg-gray-100 p-12 rounded-3xl"
      )}
    >
      <div className={cn("flex gap-2")}>
        <BookUser size={44} />
        <h1 className={cn("text-4xl")}>Phone Book App</h1>
      </div>

      <div className={cn("flex justify-between w-full items-center")}>
        <h2 className={cn("text-3xl text-slate-600 font-semibold")}>
          Contacts
        </h2>

        <ContactFormTrigger action="create">
          <Button
            className={cn("bg-blue-500 text-white text-lg rounded-3xl")}
            variant="ghost"
          >
            <Plus />
            Add Contact
          </Button>
        </ContactFormTrigger>
      </div>

      <ContactTable items={data} />
    </section>
  );
};
