import { FC } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { Edit, Phone, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ContactFormTrigger } from "@/components/organisms/ContactFormTrigger";
import axios from "axios";

export interface ContactItemProps {
  firstname: string;
  lastname: string;
  phone: string;
  index: number;
}

export const ContactItem: FC<ContactItemProps> = ({
  firstname,
  lastname,
  phone,
  index,
}) => {
  const router = useRouter();

  const formattedPhone: string = `${phone.slice(0, 3)}-${phone.slice(
    3,
    6
  )}-${phone.slice(6)}`;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/contacts/${index}`)
      .then(({ data: { error, message } }) => {
        if (error) {
          toast({ title: message, variant: "destructive" });
        } else {
          router.refresh();
          toast({ title: message });
        }
      });
  };

  return (
    <div
      className={cn(
        "p-4 border-b-4 border-gray-200 flex items-center bg-white justify-between"
      )}
    >
      <div>
        <div className={cn("flex gap-2 text-3xl font-semibold")}>
          <p>{firstname}</p>
          <p>{lastname}</p>
        </div>
        <div>
          <p className={cn("text-xl flex gap-1 items-center text-slate-500")}>
            <Phone size={18} />
            {formattedPhone}
          </p>
        </div>
      </div>

      <div className={cn("flex gap-2")}>
        <ContactFormTrigger
          action="update"
          firstname={firstname}
          lastname={lastname}
          phone={phone}
          index={index}
        >
          <Button>
            <Edit />
          </Button>
        </ContactFormTrigger>

        <Button variant="destructive" onClick={handleDelete}>
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};
