import express from "express";
import { getBrandLogos } from "../../controllers/Media/brandController.js";

const router = express.Router();

// Get all brand logos
router.route("/").get(getBrandLogos);

export default router;
