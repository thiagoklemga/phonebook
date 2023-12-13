import express from "express";

import * as contactsController from "../controllers/contactsControllers";

const router = express.Router();

router.get("/contacts", contactsController.getAllContacts);
router.post("/contacts", contactsController.addContact);
router.put("/contacts/:index", contactsController.editContact);
router.delete("/contacts/:index", contactsController.deleteContact);

export default router;
