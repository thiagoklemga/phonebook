import contacts from "../../data";
import contactsService from "../../services/contactsServices";
import { Contact } from "../../types";

describe("getAllContacts", () => {
  test("root", () => {
    expect(contactsService.getAllContacts()).toEqual(contacts);
  });
});

describe("addContact", () => {
  test("with correct data", () => {
    const newContact: Contact = {
      firstname: "John",
      lastname: "Doe",
      phone: "1234567890",
    };

    expect(contactsService.addContact(newContact)).toEqual({
      success: true,
      message: "Contact added successfully",
    });
  });

  test("with missing data", () => {
    const newContact: Contact = {
      firstname: "",
      lastname: "",
      phone: "",
    };

    expect(contactsService.addContact(newContact)).toEqual({
      success: false,
      message: "Missing data for the new contact",
    });
  });

  test("with existing phone number", () => {
    const newContact: Contact = {
      firstname: "John",
      lastname: "Doe",
      phone: "2225556575",
    };

    expect(contactsService.addContact(newContact)).toEqual({
      success: false,
      message: "Phone number already exists",
    });
  });
});

describe("deleteContact", () => {
  test("with correct data", () => {
    const index = 0;

    expect(contactsService.deleteContact(index)).toEqual({
      success: true,
      message: "Contact deleted successfully",
    });
  });

  test("with invalid index", () => {
    const index = 100;

    expect(contactsService.deleteContact(index)).toEqual({
      success: false,
      message: "Invalid index for deleting the contact",
    });
  });
});

describe("editContact", () => {
  test("with correct data", () => {
    const index = 0;
    const updatedContact: Contact = {
      firstname: "John",
      lastname: "Doe",
      phone: "1233211234",
    };

    expect(contactsService.editContact(index, updatedContact)).toEqual({
      success: true,
      message: "Contact edited successfully",
    });
  });

  test("with missing data", () => {
    const index = 0;
    const updatedContact: Contact = {
      firstname: "",
      lastname: "",
      phone: "",
    };

    expect(contactsService.editContact(index, updatedContact)).toEqual({
      success: false,
      message: "Missing data for editing the contact",
    });
  });

  test("with existing phone number", () => {
    const index = 0;
    const updatedContact: Contact = {
      firstname: "John",
      lastname: "Doe",
      phone: "1234567890",
    };

    expect(contactsService.editContact(index, updatedContact)).toEqual({
      success: false,
      message: "Phone number already exists",
    });
  });

  test("with invalid index", () => {
    const index = 100;
    const updatedContact: Contact = {
      firstname: "John",
      lastname: "Doe",
      phone: "1233211234",
    };

    expect(contactsService.editContact(index, updatedContact)).toEqual({
      success: false,
      message: "Invalid index for editing the contact",
    });
  });
});
