import { Request, Response } from "express";
import { ApiResponse, Contact } from "../types";
import contactsService from "../services/contactsService";

export const getAllContacts = (req: Request, res: Response): void => {
  const data: Contact[] = contactsService.getAllContacts();
  const apiResponse: ApiResponse = {
    success: true,
    message: "Contacts retrieved successfully",
    data,
  };
  res.json(apiResponse);
};

export const addContact = (req: Request, res: Response): void => {
  const { firstname, lastname, phone } = req.body;

  const result = contactsService.addContact({ firstname, lastname, phone });

  const apiResponse: ApiResponse = {
    success: result.success,
    message: result.message,
  };

  res.json(apiResponse);
};

export const editContact = (req: Request, res: Response): void => {
  const index: number = parseInt(req.params.index, 10);
  const { firstname, lastname, phone } = req.body;

  const result = contactsService.editContact(index, {
    firstname,
    lastname,
    phone,
  });

  const apiResponse: ApiResponse = {
    success: result.success,
    message: result.message,
  };

  res.json(apiResponse);
};

export const deleteContact = (req: Request, res: Response): void => {
  const index: number = parseInt(req.params.index, 10);

  const result = contactsService.deleteContact(index);

  const apiResponse: ApiResponse = {
    success: result.success,
    message: result.message,
  };

  res.json(apiResponse);
};
