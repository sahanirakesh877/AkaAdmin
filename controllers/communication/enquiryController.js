import Inquiry from "../../models/getInquiryModel.js";

// Create a new inquiry
export const createInquiry = async (req, res) => {
  try {
    const {
      Studentname,
      Studentage,
      Studentgender,
      StudentGrade,
      Studentaddress,
      Parentname,
      Parentemail,
      Parentphone,
      Parentoccupation,
      Parentaddress,
      transportation,
      sourceOfInfo,
    } = req.body;

 

    // Create a new inquiry document
    const newInquiry = new Inquiry({
      Studentname,
      Studentage,
      Studentgender,
      StudentGrade,
      Studentaddress,
      Parentname,
      Parentemail,
      Parentphone,
      Parentoccupation,
      Parentaddress,
      transportation,
      sourceOfInfo,
    });

    // Save inquiry to the database
    const savedInquiry = await newInquiry.save();

    res.status(201).json({
      message: "Inquiry created successfully",
      inquiry: savedInquiry,
    });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    res.status(500).json({
      message: "Error creating inquiry",
      error: error.message,
    });
  }
};
