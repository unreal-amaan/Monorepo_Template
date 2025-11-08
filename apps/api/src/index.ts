import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";

import dotenv from "dotenv";
dotenv.config();

import {auth} from "@repo/auth/server"

const app = express(); 
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use((req, res, next) => {
    console.table({
        method: req.method,
        url: req.url,
    });
    next();
}); 

app.all("/api/auth/*splat", toNodeHandler(auth));


app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "API is running..........."  });
});

app.listen(process.env.API_PORT!, () => {
    console.log(`API server running on ${process.env.API_URL!}`);
});
