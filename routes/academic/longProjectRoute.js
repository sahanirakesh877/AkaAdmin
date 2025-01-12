import express from "express";
import { getAllLongTermProject, getLongTermProjectById } from "../../controllers/Academic/longProjectController.js";

const router = express.Router();

// Get all career posts
router.route("/").get(getAllLongTermProject);

router.route('/:id').get(getLongTermProjectById)

export default router;
