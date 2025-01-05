import express from "express";
import { getAllAmun } from "../../controllers/Academic/amunController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllAmun);

export default router;
