import express from "express";


import {

    getVehicles,
    addVehicle,
    updateLocation

} from "../controllers/vehicleController.js";



const router = express.Router();



// Get vehicles

router.get(
    "/",
    getVehicles
);



// Add vehicle

router.post(
    "/",
    addVehicle
);



// Update vehicle location

router.put(
    "/location/:id",
    updateLocation
);



export default router;