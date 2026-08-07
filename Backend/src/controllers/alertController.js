import Alert from "../models/Alert.js";

export const getAlerts = async (req, res) => {

  try {

    const alerts = await Alert.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};