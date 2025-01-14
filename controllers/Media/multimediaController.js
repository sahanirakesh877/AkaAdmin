import Multimedia from "../../models/multimediaModel.js";

// Get all galleries
export const getmutlimedia = async (req, res) => {
  try {
    const mutlimedia = await Multimedia.find().sort({ createdAt: -1 });
    if (mutlimedia.length == 0) {
      return res.status(404).json({ message: "No mutlimedia found" });
    }
    res.status(200).json({
      message: "mutlimedia fetched successfully",
      mutlimedia,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
