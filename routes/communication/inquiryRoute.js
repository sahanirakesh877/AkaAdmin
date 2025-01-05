// routes/contactRoutes.js
import express from "express";
import  {createInquiry}  from "../../controllers/communication/enquiryController.js";

const router = express.Router();

// Routes for CRUD operations on contacts
router.route("/").post(createInquiry);

export default router;
