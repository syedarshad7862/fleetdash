import express from "express";
import cors from "cors";

import vehicleRoutes from "./routes/vehicleRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "FleetDash Backend Running",
  });
});

app.use("/api/vehicles", vehicleRoutes);

export default app;