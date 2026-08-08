import Vehicle from "../models/Vehicle.js";
import { io } from "../server.js";
import { createGeofenceAlert } from "../services/geofenceService.js";

const zone = [
  [77.55, 12.95],
  [77.65, 12.95],
  [77.65, 13.05],
  [77.55, 13.05],
  [77.55, 12.95],
];

export const startVehicleSimulation = () => {

  console.log("🚗 Vehicle simulation started");

  setInterval(async () => {

    console.log("🔄 Simulation tick");

    try {

      const vehicles = await Vehicle.find();

      console.log("🚚 Vehicles found:", vehicles.length);

      for (const vehicle of vehicles) {

        console.log("📍 Processing:", vehicle.vehicleId);

        const newLat =
          vehicle.location.latitude +
          (Math.random() - 0.5) * 0.001;

        const newLng =
          vehicle.location.longitude +
          (Math.random() - 0.5) * 0.001;

        const newSpeed =
          Math.floor(Math.random() * 40) + 40;

        const updatedVehicle =
          await Vehicle.findByIdAndUpdate(
            vehicle._id,
            {
              location: {
                latitude: newLat,
                longitude: newLng,
              },
              speed: newSpeed,
              status: "Moving",
            },
            {
              returnDocument: "after",
            }
          );

        io.emit(
          "vehicleUpdated",
          updatedVehicle
        );

       const result = await createGeofenceAlert(
  updatedVehicle,
  zone
);

if (result?.alert) {

  console.log(
    "🚨 GEOFENCE ALERT:",
    result.alert.message
  );

  io.emit(
    "geofenceAlert",
    result.alert
  );

}

if (result?.resolved) {

  console.log(
    "✅ GEOFENCE ALERT RESOLVED:",
    updatedVehicle.vehicleId
  );

  io.emit(
    "geofenceResolved",
    {
      vehicleId: updatedVehicle._id
    }
  );

}

        // RESOLVED ALERT
        if (result?.resolved) {

          console.log(
            "✅ SENDING GEOFENCE RESOLVED:",
            updatedVehicle.vehicleId
          );

          io.emit(
            "geofenceResolved",
            {
              vehicleId: String(updatedVehicle._id)
            }
          );
        }
      }

    } catch (err) {

      console.log(
        "❌ Simulation error:",
        err
      );

    }

  }, 3000);
};