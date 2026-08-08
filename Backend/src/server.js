import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import app from "./app.js";
import connectDB from "./config/db.js";
import Alert from "./models/Alert.js";
import { startVehicleSimulation } from "./utils/vehicleSimulator.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  console.log(
    "Client connected:",
    socket.id
  );

  // Send existing active alerts
  try {
    const activeAlerts = await Alert.find({
      resolved: false,
    })
      .sort({ createdAt: -1 })
      .limit(10);

    console.log(
      "📢 Sending active alerts:",
      activeAlerts.length
    );

    socket.emit(
      "activeAlerts",
      activeAlerts
    );

  } catch (error) {
    console.log(
      "❌ Failed to load active alerts:",
      error
    );
  }

  socket.on("disconnect", () => {
    console.log(
      "Client disconnected:",
      socket.id
    );
  });
});

startVehicleSimulation();

server.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});