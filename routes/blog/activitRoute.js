import express from "express";
import { getAllActivities } from "../../controllers/Blog/acticityController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllActivities);

export default router;
