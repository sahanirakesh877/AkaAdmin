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


export const getLongTermProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const longtermProject = await LongProject.findById(id);

    if (!longtermProject) {
      return res.status(404).json({
        message: "longtermProject not found",
      });
    }

    res.status(200).json({
      message: "longtermProject fetched successfully",
      longtermProject,
    });
  } catch (error) {
    console.error("Error fetching longtermProject by ID:", error);
    res.status(500).json({
      message: "Error fetching longtermProject",
      error: error.message,
    });
  }
};
