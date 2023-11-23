import express from "express";
import morgan from "morgan";
import path from "path";
import cors from 'cors'
import paymentRoutes from './payment.routes.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(paymentRoutes);
app.use(express.static(path.resolve("client")));

app.listen(3000);
console.log("Server on port", 3000);