// routes/contactRoutes.js
import express from "express";
import  {registerUser}  from "../../controllers/communication/getTouchController.js";

const router = express.Router();

// Routes for CRUD operations on contacts
router.route("/").post(registerUser);

export default router;
