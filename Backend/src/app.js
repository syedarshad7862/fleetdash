import express from "express";
import cors from "cors";

import vehicleRoutes from "./routes/vehicleRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Routes
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/alerts", alertRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FleetDash Backend Running"
  });
});

export default app;