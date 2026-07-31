import Vehicle from "../models/Vehicle.js";
import { io } from "../server.js";

export const startVehicleSimulation = () => {
  setInterval(async () => {
    try {
      const vehicles = await Vehicle.find();

      for (const vehicle of vehicles) {
        const newLat =
          vehicle.location.latitude + (Math.random() - 0.5) * 0.001;

        const newLng =
          vehicle.location.longitude + (Math.random() - 0.5) * 0.001;

        const newSpeed = Math.floor(Math.random() * 40) + 40;

        const updatedVehicle = await Vehicle.findByIdAndUpdate(
          vehicle._id,
          {
            location: {
              latitude: newLat,
              longitude: newLng,
            },
            speed: newSpeed,
            status: "Moving",
          },
          { new: true }
        );

        io.emit("vehicleUpdated", updatedVehicle);
      }
    } catch (err) {
      console.log(err);
    }
  }, 3000); // update every 3 seconds
};