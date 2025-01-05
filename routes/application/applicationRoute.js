import express from "express";
import { createApplication } from "../../controllers/Application/applicationController.js";

const router = express.Router();

// Get all brand logos
router.route("/").post(createApplication);

export default router;