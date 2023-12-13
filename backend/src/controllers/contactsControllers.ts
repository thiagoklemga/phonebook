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
  const result = contactsService.addContact(newContact);

  if (result.success) {
    const apiResponse: ApiResponse = {
      status: "success",
      message: result.message,
      data: [newContact],
    };
    res.status(201).json(apiResponse);
  } else {
    const apiResponse: ApiResponse = {
      status: "error",
      message: result.message,
      data: [],
    };
    res.status(400).json(apiResponse);
  }
};

export const editContact = (req: Request, res: Response): void => {
  const index: number = parseInt(req.params.index, 10);
  const { firstname, lastname, phone } = req.body;

  if (isNaN(index) || !firstname || !lastname || !phone) {
    const apiResponse: ApiResponse = {
      status: "error",
      message: "Invalid data or index provided for editing the contact",
      data: [],
    };
    res.status(400).json(apiResponse);
    return;
  }

  const updatedContact: Contact = { firstname, lastname, phone };
  const result = contactsService.editContact(index, updatedContact);

  if (result.success) {
    const apiResponse: ApiResponse = {
      status: "success",
      message: result.message,
      data: [updatedContact],
    };
    res.json(apiResponse);
  } else {
    const apiResponse: ApiResponse = {
      status: "error",
      message: result.message,
      data: [],
    };
    res.status(400).json(apiResponse);
  }
};

export const deleteContact = (req: Request, res: Response): void => {
  const index: number = parseInt(req.params.index, 10);

  if (isNaN(index)) {
    const apiResponse: ApiResponse = {
      status: "error",
      message: "Invalid index provided for deleting the contact",
      data: [],
    };
    res.status(400).json(apiResponse);
    return;
  }

  const result = contactsService.deleteContact(index);

  if (result.success) {
    const apiResponse: ApiResponse = {
      status: "success",
      message: result.message,
      data: [],
    };
    res.json(apiResponse);
  } else {
    const apiResponse: ApiResponse = {
      status: "error",
      message: result.message,
      data: [],
    };
    res.status(400).json(apiResponse);
  }
};
