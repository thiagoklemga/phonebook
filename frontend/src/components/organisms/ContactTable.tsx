"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ContactItem,
  ContactItemProps,
} from "@/components/organisms/ContactItem";

export const ContactTable = ({ items }: { items: ContactItemProps[] }) => {
  const [search, setSearch] = useState("");

  const filteredItems =
    search.length > 0
      ? items.filter((item) =>
          item.lastname.toLowerCase().includes(search.toLowerCase())
        )
      : items;

  return (
    <>
      <Input
        name="search"
        type="text"
        placeholder="Search for contact by last name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={cn(
          "h-20 leading-20 border-gray-200 border-4 text-xl rounded-lg"
        )}
      />

      <ScrollArea className="h-full w-full rounded-md border">
        <div
          className={cn(
            "border-gray-200 border-4 rounded-lg w-full flex flex-col"
          )}
        >
          {filteredItems.map((item, index) => {
            return <ContactItem key={index} {...item} index={index} />;
          })}
        </div>
      </ScrollArea>
    </>
  );
};
