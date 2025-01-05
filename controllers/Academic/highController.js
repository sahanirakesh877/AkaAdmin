import Senior from "../../models/academicModel/seniorschoolModel.js";

// GET: Fetch all seniorData sorted by creation date
export const getAllSenior = async (req, res) => {
  try {
    // Fetch users and sort by creation date (descending)
    const seniorData = await Senior.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "seniorData fetched successfully ",
      seniorData,
    });
  } catch (error) {
    console.error("Error fetching seniorData:", error);
    res.status(500).json({
      message: "Error fetching seniorData",
      error: error.message,
    });
  }
};

 
