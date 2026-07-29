import { Server } from "socket.io";

let io;

const setupSocket = (server) => {

  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {

    console.log("Vehicle client connected:", socket.id);

    socket.on("vehicle-location", (data) => {

      console.log(data);

      io.emit("live-location", data);

    });

    socket.on("disconnect", () => {

      console.log("Client disconnected");

    });

  });

};

export const getIO = () => io;

export default setupSocket;