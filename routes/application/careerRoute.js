import express from "express";
import { getCareerPosts } from "../../controllers/Application/careerController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getCareerPosts);

export default router;
