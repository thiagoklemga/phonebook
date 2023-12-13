import { Request, Response } from "express";
import contactsService from "../services/contactsService";

export const getAllContacts = (req: Request, res: Response): void => {
  const contacts = contactsService.getAllContacts();
  res.json(contacts);
};
