import LongProject from "../../models/longtermProjectModel.js";

// GET: Fetch all KinderData sorted by creation date
export const getAllLongTermProject = async (req, res) => {
  try {
    // Fetch users and sort by creation date (descending)
    const LongProjectData = await LongProject.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "LongProjectData fetched successfully ",
      LongProjectData,
    });
  } catch (error) {
    console.error("Error fetching LongProjectData:", error);
    res.status(500).json({
      message: "Error fetching LongProjectData",
      error: error.message,
    });
  }
};
