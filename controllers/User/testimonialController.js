import Testimonial from "../../models/testimonialModel.js";

// Fetch all activities
export const getAllTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "testimonial fetched successfully",
      testimonial,
    });
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    res.status(500).json({
      message: "Error fetching testimonial",
      error: error.message,
    });
  }
};
