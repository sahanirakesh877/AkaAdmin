import express from "express";
import { getUpcomingEvent } from "../../controllers/Event/upcomingController.js";

const router = express.Router();

router.route("/").get(getUpcomingEvent);

export default router;
