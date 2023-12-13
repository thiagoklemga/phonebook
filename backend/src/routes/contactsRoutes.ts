import express from "express";
const router = express.Router();

import contactsService from "../services/contactsService";

router.get("/contacts", (req, res) => {
  const contacts = contactsService.getAllContacts();
  res.json(contacts);
});

export default router;
