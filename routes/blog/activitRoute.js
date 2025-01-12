import express from "express";
import { getActivityById, getAllActivities } from "../../controllers/Blog/acticityController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllActivities);
router.route('/:id').get(getActivityById)

export default router;
