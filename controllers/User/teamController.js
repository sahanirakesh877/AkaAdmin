import Teams from "../../models/teamModel.js";

// Fetch all activities
export const getAllTeam = async (req, res) => {
  try {
    const team = await Teams.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "team fetched successfully",
      team,
    });
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({
      message: "Error fetching team",
      error: error.message,
    });
  }
};
