import Result from "../../models/resultModel.js";

// Get all brand logos
export const getPDFResult = async (req, res) => {
  try {
    const getResult = await Result.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: " pdf fetched successfully",
      getResult,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching pdf", error });
  }
};
