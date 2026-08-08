import * as turf from "@turf/turf";
import Alert from "../models/Alert.js";

// Check whether vehicle is inside zone
export const checkGeofence = (vehiclePoint, zone) => {
  const point = turf.point([
    vehiclePoint.lng,
    vehiclePoint.lat
  ]);

  const polygon = turf.polygon([zone]);

  return turf.booleanPointInPolygon(point, polygon);
};


// Geofence logic
export const createGeofenceAlert = async (vehicle, zone) => {

  const inside = checkGeofence(
    {
      lat: vehicle.location.latitude,
      lng: vehicle.location.longitude
    },
    zone
  );

  console.log(
    `🔍 ${vehicle.vehicleId} inside zone:`,
    inside
  );


  // =====================================
  // VEHICLE IS INSIDE
  // =====================================

  if (inside) {

    // Resolve ALL active alerts for this vehicle
    const result = await Alert.updateMany(
      {
        vehicleId: vehicle._id,
        type: "GEOFENCE_BREACH",
        resolved: false
      },
      {
        $set: {
          resolved: true
        }
      }
    );

    if (result.modifiedCount > 0) {

      console.log(
        `✅ Resolved ${result.modifiedCount} alert(s) for ${vehicle.vehicleId}`
      );

      return {
        resolved: true,
        vehicleId: vehicle._id
      };
    }

    return null;
  }


  // =====================================
  // VEHICLE IS OUTSIDE
  // =====================================

  console.log(
    "🚨 Vehicle is OUTSIDE:",
    vehicle.vehicleId
  );


  // Check if an active alert already exists
  const existingAlert = await Alert.findOne({
    vehicleId: vehicle._id,
    type: "GEOFENCE_BREACH",
    resolved: false
  });


  if (existingAlert) {

    console.log(
      "⚠️ Alert already exists for:",
      vehicle.vehicleId
    );

    return null;
  }


  // =====================================
  // CREATE NEW ALERT
  // =====================================

  const alert = await Alert.create({

    vehicleId: vehicle._id,

    type: "GEOFENCE_BREACH",

    message:
      `Vehicle ${vehicle.vehicleId} has left the geofenced zone`,

    resolved: false

  });


  console.log(
    "🚨 NEW ALERT CREATED:",
    vehicle.vehicleId
  );


  return {
    alert,
    resolved: false
  };
};