import express from "express";
import { getAllElementary } from "../../controllers/Academic/elementaryController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllElementary);

export default router;
