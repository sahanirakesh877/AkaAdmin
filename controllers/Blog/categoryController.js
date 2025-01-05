
import Category from '../../models/categoryModel.js';

// Fetch all activities
export const getAllCategories = async (req, res) => {
    try {
      const category = await Category.find().sort({ createdAt: -1 }); 
      res.status(200).json({
        message: "category fetched successfully",
        category,
      });
    } catch (error) {
      console.error("Error fetching category:", error);
      res.status(500).json({
        message: "Error fetching category",
        error: error.message,
      });
    }
  };
  