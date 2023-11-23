import { Router } from "express";
import {
  createOrder,
  createOrder2,
  receiveWebhook,
} from "./payment.controller.js";

const router = Router();

router.post("/create-order", createOrder);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

router.post("/create-order2", createOrder2);

export default router;