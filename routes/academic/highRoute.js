import express from "express";
import { getAllSenior } from "../../controllers/Academic/highController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllSenior);

export default router;
