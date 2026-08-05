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


// Create geofence alert
export const createGeofenceAlert = async (vehicle, zone) => {

  const inside = checkGeofence(
    {
      lat: vehicle.location.latitude,
      lng: vehicle.location.longitude
    },
    zone
  );

  // Vehicle is inside
  if (inside) {
    return null;
  }

  // Vehicle is outside
  const alert = await Alert.create({
    vehicleId: vehicle._id,

    type: "GEOFENCE_BREACH",

    message: `Vehicle ${vehicle.vehicleId} has left the geofenced zone`,

    resolved: false
  });

  return alert;
};