import express from "express";
import { getAllKinder } from "../../controllers/Academic/kinderController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllKinder);

export default router;
