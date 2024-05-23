import express from "express";
import { router } from "./http/routes";
import cors from "cors";
import { env } from "./env";

export const app = express();

app.use(cors({
    origin: env.FRONT_END_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

console.log("front end origin", env.FRONT_END_ORIGIN);

app.use(express.json());
app.use(router);
