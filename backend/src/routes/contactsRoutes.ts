import express from "express";

import * as contactsController from "../controllers/contactsControllers";

const router = express.Router();

router.get("/", contactsController.getAllContacts);
router.post("/", contactsController.addContact);
router.put("/:index", contactsController.editContact);
router.delete("/:index", contactsController.deleteContact);

export default router;
