import express from "express";
import { getPDFResult } from "./../../controllers/Media/resultController.js";

const router = express.Router();

router.route("/").get(getPDFResult);

export default router;
