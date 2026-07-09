import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

import connectDB from "./config/db.js";
import setupSocket from "./socket/socketServer.js";

import vehicleRoutes from "./routes/vehicleRoutes.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();


const app = express();


const server = http.createServer(app);


// middleware
app.use(cors());

app.use(express.json());


// Database
connectDB();


// API Routes

app.use("/api/auth", authRoutes);

app.use("/api/vehicles", vehicleRoutes);


// Socket.io

setupSocket(server);



const PORT = process.env.PORT || 5000;


server.listen(PORT,()=>{

    console.log(
        `🚚 FleetDash Server running on ${PORT}`
    );

});