import contacts from "../data";
import { Contact } from "../types";

function getAllContacts(): Contact[] {
  return contacts;
}

function addContact(newContact: Contact): void {
  contacts.push(newContact);
}

export default {
  getAllContacts,
  addContact,
};
