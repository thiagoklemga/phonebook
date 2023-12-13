import { Request, Response } from "express";
import { ApiResponse, Contact } from "../types";
import contactsService from "../services/contactsService";

export const getAllContacts = (req: Request, res: Response): void => {
  const data: Contact[] = contactsService.getAllContacts();
  const apiResponse: ApiResponse = {
    status: "success",
    message: "Contacts retrieved successfully",
    data,
  };
  res.json(apiResponse);
};

export const addContact = (req: Request, res: Response): void => {
  const { firstname, lastname, phone } = req.body;

  if (!firstname || !lastname || !phone) {
    const apiResponse: ApiResponse = {
      status: "error",
      message: "Invalid data provided for the new contact",
      data: [],
    };
    res.status(400).json(apiResponse);
    return;
  }

  const newContact: Contact = { firstname, lastname, phone };
  contactsService.addContact(newContact);

  const apiResponse: ApiResponse = {
    status: "success",
    message: "Contact added successfully",
    data: [newContact],
  };
  res.status(201).json(apiResponse);
};
