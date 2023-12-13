"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { clientReq } from "@/api/clientReq";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FormCommonProps } from "./ContactFormTrigger";

const FormSchema = z.object({
  firstname: z.string().refine((value) => !/\s/.test(value), {
    message: "First name should not contain spaces.",
  }),
  lastname: z.string().refine((value) => !/\s/.test(value), {
    message: "Last name should not contain spaces.",
  }),
  phone: z.string().min(10).max(10),
});

interface ContactFormProps extends FormCommonProps {
  setOpen: (open: boolean) => void;
}

export const ContactForm: FC<ContactFormProps> = ({
  setOpen,
  action,
  firstname,
  lastname,
  phone,
  index,
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: firstname ?? "",
      lastname: lastname ?? "",
      phone: phone ?? "",
    },
  });

  console.log(
    form.watch("firstname"),
    form.watch("lastname"),
    form.watch("phone"),
    firstname,
    lastname,
    phone
  );

  const handleDisabled = () => {
    if (
      action === "update" &&
      firstname === form.watch("firstname") &&
      lastname === form.watch("lastname") &&
      phone === form.watch("phone")
    ) {
      return true;
    }

    return false;
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const requestMethod = action === "create" ? "post" : "put";
    const url = action === "create" ? "/contacts" : `/contacts/${index}`;

    clientReq[requestMethod](url, data).then(
      ({ data: { success, message } }) => {
        if (success) {
          router.refresh();
          setOpen(false);
        }

        const toastVariant = success ? "default" : "destructive";
        toast({ title: message, variant: toastVariant });
      }
    );
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {action === "create" ? "New" : "Edit"} Contact
        </DialogTitle>
        <DialogDescription>
          {action === "create"
            ? "Add a new contact to your phone book!"
            : "Edit the contact details below."}
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name={"firstname"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Steve" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"lastname"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jobs" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"phone"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="220-454-6754" type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button
              type="submit"
              disabled={handleDisabled()}
              className={cn("bg-blue-500 text-white text-lg")}
            >
              {action === "create" ? "New" : "Edit"} Contact
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
