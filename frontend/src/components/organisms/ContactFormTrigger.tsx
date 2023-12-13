"use client";

import { FC, ReactNode, useState } from "react";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "@/components/organisms/ContactForm";

export interface FormCommonProps {
  action: "create" | "update";
  firstname?: string;
  lastname?: string;
  phone?: string;
  index?: number;
}
interface ContactFormTriggerProps extends FormCommonProps {
  children: ReactNode;
}

export const ContactFormTrigger: FC<ContactFormTriggerProps> = ({
  children,
  action,
  firstname,
  lastname,
  phone,
  index,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      {open && (
        <ContactForm
          setOpen={setOpen}
          action={action}
          firstname={firstname}
          lastname={lastname}
          phone={phone}
          index={index}
        />
      )}
    </Dialog>
  );
};
