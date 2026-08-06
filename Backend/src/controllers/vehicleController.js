import Vehicle from "../models/Vehicle.js";
import { io } from "../server.js";
import { createGeofenceAlert } from "../services/geofenceService.js";
import { zones } from "../data/zones.js";

// Create Vehicle
export const createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);

    res.status(201).json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Vehicles
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();

    res.status(200).json({
      success: true,
      count: vehicles.length,
      data: vehicles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Vehicle
export const getVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    res.status(200).json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Vehicle
// Update Vehicle
export const updateVehicle = async (req, res) => {
  try {

    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedVehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    // Send updated vehicle to dashboard
    io.emit("vehicleUpdated", updatedVehicle);


    // ==============================
    // GEOFENCE CHECK
    // ==============================

    // Example Bangalore geofence
    const zone = [
      [77.55, 12.95],
      [77.65, 12.95],
      [77.65, 13.05],
      [77.55, 13.05],
      [77.55, 12.95]
    ];

    const alert = await createGeofenceAlert(
      updatedVehicle,
      zone
    );


    // If vehicle is outside zone
    if (alert) {

      console.log(
        "🚨 GEOFENCE ALERT:",
        alert.message
      );

      // Send alert to frontend
      io.emit(
        "geofenceAlert",
        alert
      );
    }


    res.status(200).json({
      success: true,
      data: updatedVehicle,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Vehicle
export const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Vehicle deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};