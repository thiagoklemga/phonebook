import contacts, { Contact } from "../data";

function getAllContacts(): Contact[] {
  return contacts;
}

export default {
  getAllContacts,
};
