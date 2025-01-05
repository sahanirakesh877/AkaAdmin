import Creative from "../../models/creativeModel.js";

// Fetch all activities
export const getAllCreative = async (req, res) => {
  try {
    const creative = await Creative.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "creative fetched successfully",
      creative,
    });
  } catch (error) {
    console.error("Error fetching creative:", error);
    res.status(500).json({
      message: "Error fetching creative",
      error: error.message,
    });
  }
};
