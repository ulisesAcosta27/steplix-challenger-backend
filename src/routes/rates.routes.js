import { Router } from "express";
import * as ratesController from "../controllers/rates.controller.js";

const router = Router();

router.post("/", ratesController.createRates);
router.get("/", ratesController.gelAllRates);
router.get("/:symbol", ratesController.getSymbol);

export default router;
