import express from "express";
import { getAllTestimonial } from "../../controllers/User/testimonialController.js";

const router = express.Router();

// Get all brand logos
router.route("/").get(getAllTestimonial);

export default router;
