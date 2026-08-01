import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
      unique: true,
    },

    driverName: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["Truck", "Car", "Bus", "Van"],
      required: true,
    },

    location: {
      latitude: {
        type: Number,
        default: 0,
      },

      longitude: {
        type: Number,
        default: 0,
      },
    },

    speed: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Moving", "Stopped", "Idle"],
      default: "Stopped",
    },

    fuelLevel: {
      type: Number,
      default: 100,
    },

    // Geographical zone assigned to vehicle
    zone: {
      type: String,
      default: "Unassigned",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vehicle", vehicleSchema);