import express from "express";

import * as contactsController from "../controllers/contactsControllers"; // Change this line

const router = express.Router();

router.get("/contacts", contactsController.getAllContacts);
router.post("/contacts", contactsController.addContact);

export default router;
