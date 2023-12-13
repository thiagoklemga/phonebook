import { cn } from "@/lib/utils";

import { PhoneBook } from "@/components/templates/PhoneBook";

export default async function Home() {
  return (
    <main className={cn("flex items-center justify-center h-screen w-screen")}>
      <PhoneBook />
    </main>
  );
}
