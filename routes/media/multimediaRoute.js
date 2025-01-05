import express from "express";
import { getmutlimedia } from "../../controllers/Media/multimediaController.js";

const router = express.Router();

// Get all brand logos
router.route("/").get(getmutlimedia);

export default router;
