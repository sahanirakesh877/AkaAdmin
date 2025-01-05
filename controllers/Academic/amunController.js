import Amun from "../../models/academicModel/amunModel.js";

// GET: Fetch all KinderData sorted by creation date
export const getAllAmun = async (req, res) => {
  try {
    // Fetch users and sort by creation date (descending)
    const AmunData = await Amun.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "AmunData fetched successfully ",
      AmunData,
    });
  } catch (error) {
    console.error("Error fetching AmunData:", error);
    res.status(500).json({
      message: "Error fetching AmunData",
      error: error.message,
    });
  }
};
