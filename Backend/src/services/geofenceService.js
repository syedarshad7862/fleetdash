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


// Create geofence alert
export const createGeofenceAlert = async (vehicle, zone) => {

  const inside = checkGeofence(
    {
      lat: vehicle.location.latitude,
      lng: vehicle.location.longitude
    },
    zone
  );

  // =====================================
  // VEHICLE IS INSIDE
  // =====================================

  if (inside) {

    // If vehicle came back inside,
    // resolve its previous active alert

    await Alert.findOneAndUpdate(
      {
        vehicleId: vehicle._id,
        type: "GEOFENCE_BREACH",
        resolved: false
      },
      {
        resolved: true
      }
    );

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
    "🚨 NEW GEOFENCE ALERT CREATED:",
    vehicle.vehicleId
  );


  return alert;
};