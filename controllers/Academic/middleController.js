import MiddleSchools from "./../../models/academicModel/middleschoolModel.js";

export const getAllMiddle = async (req, res) => {
  try {
    const MiddleSchoolData = await MiddleSchools.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "seniorData fetched successfully ",
      MiddleSchoolData,
    });
  } catch (error) {
    console.error("Error fetching MiddleSchoolData:", error);
    res.status(500).json({
      message: "Error fetching MiddleSchoolData",
      error: error.message,
    });
  }
};
