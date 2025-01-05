import express from "express";
import { getAllBlog } from "../../controllers/Blog/blogController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllBlog);

export default router;
