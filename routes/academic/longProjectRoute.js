import express from "express";
import { getAllLongTermProject } from "../../controllers/Academic/longProjectController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllLongTermProject);

export default router;
