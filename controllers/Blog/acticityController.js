import Activity from "../../models/activityModel.js";

// Fetch all activities
export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      message: "Activities fetched successfully",
      activities,
    });
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({
      message: "Error fetching activities",
      error: error.message,
    });
  }
};

export const getActivityById = async (req, res) => {
  try {
    const { id } = req.params;
    const activities = await Activity.findById(id);

    if (!activities) {
      return res.status(404).json({
        message: "activities not found",
      });
    }

    res.status(200).json({
      message: "activities fetched successfully",
      activities,
    });
  } catch (error) {
    console.error("Error fetching activities by ID:", error);
    res.status(500).json({
      message: "Error fetching activities",
      error: error.message,
    });
  }
};
