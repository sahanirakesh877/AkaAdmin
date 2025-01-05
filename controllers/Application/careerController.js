import Career from "../../models/careerModel.js";

// Get all career posts
export const getCareerPosts = async (req, res) => {
  try {
    const careerPosts = await Career.find(); // Retrieve all career posts
    if (careerPosts.length === 0) {
      return res.status(404).json({ message: "No career posts found" });
    }
    res.status(200).json({
      message: "Career posts fetched successfully",
      careerPosts, // Return the career posts
    });
  } catch (error) {
    console.error("Error fetching career posts:", error);
    res.status(500).json({ message: "Error fetching career posts" });
  }
};

