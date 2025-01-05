import Gallery from "../../models/galleryModel.js";

// Get all galleries
 export const getGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    if (galleries.length == 0) {
      return res.status(404).json({ message: "No galleries found" });
    }
    res.status(200).json({
      message: "Galleries fetched successfully",
      galleries,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching galleries", error });
  }
};





