import express from "express";
import { getAllMiddle } from "../../controllers/Academic/middleController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllMiddle);

export default router;
