import contacts from "../data";
import { contactExists } from "../helpers/contactExists";
import { Contact } from "../types";

function getAllContacts(): Contact[] {
  return contacts;
}

function addContact(newContact: Contact): {
  success: boolean;
  message: string;
} {
  if (!newContact.firstname || !newContact.lastname || !newContact.phone) {
    return { success: false, message: "Missing data for the new contact" };
  }

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
    if (
      !updatedContact.firstname ||
      !updatedContact.lastname ||
      !updatedContact.phone
    ) {
      return {
        success: false,
        message: "Missing data for editing the contact",
      };
    }

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
