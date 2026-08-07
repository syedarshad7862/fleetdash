
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import connectDB from "./config/db.js";
import { startVehicleSimulation } from "./utils/vehicleSimulator.js";


dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// Create Socket.io
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {

  console.log("Client connected:", socket.id);

  io.emit("testAlert", {
    message: "Socket connection is working!"
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });

});


// Start server
server.listen(PORT, () => {

  console.log(`🚀 Server running on port ${PORT}`);

  // Start vehicle simulation after server starts
  startVehicleSimulation();

});