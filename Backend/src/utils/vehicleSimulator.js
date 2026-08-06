import Vehicle from "../models/Vehicle.js";
import { io } from "../server.js";
import { createGeofenceAlert } from "../services/geofenceService.js";


// Bangalore test geofence
const zone = [
  [77.55, 12.95],
  [77.65, 12.95],
  [77.65, 13.05],
  [77.55, 13.05],
  [77.55, 12.95],
];


export const startVehicleSimulation = () => {

  setInterval(async () => {

    try {

      const vehicles = await Vehicle.find();

      for (const vehicle of vehicles) {

        // Generate new position
        const newLat =
          vehicle.location.latitude +
          (Math.random() - 0.5) * 0.001;

        const newLng =
          vehicle.location.longitude +
          (Math.random() - 0.5) * 0.001;


        const newSpeed =
          Math.floor(Math.random() * 40) + 40;


        // Update vehicle
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


        // Send updated vehicle to frontend
        io.emit(
          "vehicleUpdated",
          updatedVehicle
        );


        // ==============================
        // GEOFENCE CHECK
        // ==============================

        const result =
          await createGeofenceAlert(
            updatedVehicle,
            zone
          );


        // ==============================
        // NEW GEOFENCE ALERT
        // ==============================

        if (result && !result.resolved) {

          console.log(
            "🚨 GEOFENCE ALERT:",
            result.alert.message
          );


          // Send new alert to frontend
          io.emit(
            "geofenceAlert",
            result.alert
          );

        }


        // ==============================
        // GEOFENCE ALERT RESOLVED
        // ==============================

        if (result && result.resolved) {

          console.log(
            "✅ GEOFENCE ALERT RESOLVED:",
            updatedVehicle.vehicleId
          );


          // Tell frontend that alert is resolved
          io.emit(
            "geofenceResolved",
            result.alert
          );

        }

      }

    } catch (err) {

      console.log(
        "Simulation error:",
        err
      );

    }

  }, 3000);

};