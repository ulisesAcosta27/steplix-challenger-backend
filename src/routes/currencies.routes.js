import { Router } from "express";
import * as currenciesController from "../controllers/currencies.controller.js";

const router = Router();

router.post("/", currenciesController.createCurrencies);
router.get("/", currenciesController.gelAllCurrencies);

export default router;
