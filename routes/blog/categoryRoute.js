import express from "express";
import { getAllCategories } from "../../controllers/Blog/categoryController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllCategories);

export default router;
