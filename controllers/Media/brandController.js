import BrandLogo from "../../models/brandModel.js";



// Get all brand logos
export const getBrandLogos = async (req, res) => {
  try {
    const brandLogos = await BrandLogo.find();
    res.status(200).json({
      message: "Brand logos fetched successfully",
      brandLogos,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching brand logos", error });
  }
};




