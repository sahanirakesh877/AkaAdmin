import Elementary from "../../models/academicModel/elementaryModel.js";

// GET: Fetch all KinderData sorted by creation date
export const getAllElementary = async (req, res) => {
  try {
    // Fetch users and sort by creation date (descending)
    const elementaryData = await Elementary.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "elementaryData fetched successfully ",
      elementaryData,
    });
  } catch (error) {
    console.error("Error fetching elementaryData:", error);
    res.status(500).json({
      message: "Error fetching elementaryData",
      error: error.message,
    });
  }
};

 
