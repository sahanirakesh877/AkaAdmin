import express from "express";
import { getCalendar } from "../../controllers/Event/calendarController.js";

const router = express.Router();

router.route("/").get(getCalendar);

export default router;
