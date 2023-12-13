export interface Contact {
  firstname: string;
  lastname: string;
  phone: string;
}

const contacts: Contact[] = [
  { firstname: "Eric", lastname: "Elliot", phone: "2225556575" },
  { firstname: "Steve", lastname: "Jobs", phone: "22054546754" },
  { firstname: "Fred", lastname: "Allen", phone: "2106578786" },
  { firstname: "Steve", lastname: "Wozniak", phone: "3436758786" },
  { firstname: "Bill", lastname: "Gates", phone: "3436549688" },
];

export default contacts;
