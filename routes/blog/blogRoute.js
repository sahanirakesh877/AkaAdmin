import express from "express";
import {
  getAllBlog,
  getBlogById,
} from "../../controllers/Blog/blogController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllBlog);
router.route("/:id").get(getBlogById);

export default router;
