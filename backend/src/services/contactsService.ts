import contacts from "../data";
import { Contact } from "../types";

function getAllContacts(): Contact[] {
  return contacts;
}

function contactExists(phone: string, excludeIndex?: number): boolean {
  return contacts.some(
    (contact, index) => index !== excludeIndex && contact.phone === phone
  );
}

function addContact(newContact: Contact): {
  success: boolean;
  message: string;
} {
  if (contactExists(newContact.phone)) {
    return { success: false, message: "Phone number already exists" };
  }

  contacts.push(newContact);
  return { success: true, message: "Contact added successfully" };
}

function editContact(
  index: number,
  updatedContact: Contact
): { success: boolean; message: string } {
  if (index >= 0 && index < contacts.length) {
    if (contactExists(updatedContact.phone, index)) {
      return { success: false, message: "Phone number already exists" };
    }

    contacts[index] = updatedContact;
    return { success: true, message: "Contact edited successfully" };
  }

  return { success: false, message: "Invalid index for editing the contact" };
}

function deleteContact(index: number): { success: boolean; message: string } {
  if (index >= 0 && index < contacts.length) {
    contacts.splice(index, 1);
    return { success: true, message: "Contact deleted successfully" };
  }

  return { success: false, message: "Invalid index for deleting the contact" };
}

export default {
  getAllContacts,
  addContact,
  editContact,
  deleteContact,
};
