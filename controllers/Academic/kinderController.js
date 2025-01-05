import Kinder from "../../models/academicModel/kindergartenModel.js";

// GET: Fetch all KinderData sorted by creation date
export const getAllKinder = async (req, res) => {
  try {
    // Fetch users and sort by creation date (descending)
    const KinderData = await Kinder.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "KinderData fetched successfully ",
      KinderData,
    });
  } catch (error) {
    console.error("Error fetching KinderData:", error);
    res.status(500).json({
      message: "Error fetching KinderData",
      error: error.message,
    });
  }
};

 
