import express from "express";
import { getAllCreative } from "../../controllers/Blog/creativeController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllCreative);

export default router;
