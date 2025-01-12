import Blog from "../../models/blogModel.js";

// Fetch all activities
export const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    console.error("Error fetching Blog:", error);
    res.status(500).json({
      message: "Error fetching Blog",
      error: error.message,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    console.error("Error fetching Blog by ID:", error);
    res.status(500).json({
      message: "Error fetching Blog",
      error: error.message,
    });
  }
};
