import express from "express";
import { getNotice } from "../../controllers/Media/noticeController.js";

const router = express.Router();

// Get all brand logos
router.route("/").get(getNotice);

export default router;