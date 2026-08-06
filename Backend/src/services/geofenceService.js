import * as turf from "@turf/turf";
import Alert from "../models/Alert.js";

// Check whether vehicle is inside zone
export const checkGeofence = (vehiclePoint, zone) => {
  const point = turf.point([
    vehiclePoint.lng,
    vehiclePoint.lat
  ]);

  const polygon = turf.polygon([zone]);

  return turf.booleanPointInPolygon(
    point,
    polygon
  );
};


// Handle geofence state
export const createGeofenceAlert = async (vehicle, zone) => {

  const inside = checkGeofence(
    {
      lat: vehicle.location.latitude,
      lng: vehicle.location.longitude
    },
    zone
  );


  // ==========================================
  // VEHICLE IS INSIDE THE ZONE
  // ==========================================

  if (inside) {

    // Find active geofence alert
    const activeAlert = await Alert.findOne({
      vehicleId: vehicle._id,
      type: "GEOFENCE_BREACH",
      resolved: false
    });


    // If an active alert exists,
    // resolve it because vehicle came back
    if (activeAlert) {

      activeAlert.resolved = true;

      await activeAlert.save();

      console.log(
        `✅ Geofence alert resolved for ${vehicle.vehicleId}`
      );

      return {
        resolved: true,
        alert: activeAlert
      };
    }


    // No active alert
    return null;
  }


  // ==========================================
  // VEHICLE IS OUTSIDE THE ZONE
  // ==========================================

  const existingAlert = await Alert.findOne({
    vehicleId: vehicle._id,
    type: "GEOFENCE_BREACH",
    resolved: false
  });


  // Already has an active alert
  if (existingAlert) {
    return null;
  }


  // ==========================================
  // CREATE NEW ALERT
  // ==========================================

  const alert = await Alert.create({

    vehicleId: vehicle._id,

    type: "GEOFENCE_BREACH",

    message:
      `Vehicle ${vehicle.vehicleId} has left the geofenced zone`,

    resolved: false

  });


  console.log(
    `🚨 Geofence alert created for ${vehicle.vehicleId}`
  );


  return {
    resolved: false,
    alert
  };
};