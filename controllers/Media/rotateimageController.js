import Rotategallery from "../../models/rotateImageModel.js";

// Get all galleries
export const getRotateGalleries = async (req, res) => {
  try {
    const rotate = await Rotategallery.find().sort({ createdAt: -1 });
    if (rotate.length == 0) {
      return res.status(404).json({ message: "No rotate found" });
    }
    res.status(200).json({
      message: "Galleries fetched successfully",
      rotate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching rotate", error });
  }
};
