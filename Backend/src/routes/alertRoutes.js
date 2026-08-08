import express from "express";
import Alert from "../models/Alert.js";

const router = express.Router();


// Get active alerts
router.get("/", async (req, res) => {

  try {

    const alerts = await Alert.find({
      resolved: false
    })
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

});

export default router;