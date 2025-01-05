import express from "express";
import { getAllTeam } from "../../controllers/User/teamController.js";

const router = express.Router();

// Get all brand logos
router.route("/").get(getAllTeam);

export default router;
