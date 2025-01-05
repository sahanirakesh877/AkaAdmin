// routes/contactRoutes.js
import express from "express";
import { createContact } from "../../controllers/communication/contactController.js";

const router = express.Router();

router.route("/").post(createContact);

export default router;
