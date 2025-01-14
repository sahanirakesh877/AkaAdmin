import Inquiry from "../../models/getInquiryModel.js";

// Create a new inquiry
export const createInquiry = async (req, res) => {
  try {
    const {
      Sname,
      Sage,
      Sgender,
      Sgrade,
      Saddress,
      Pname,
      Pemail,
      Pphone,
      Poccupation,
      Paddress,
      transportation,
      sourceOfInfo,
    } = req.body;

    // Validate required fields are present
    if (!Sname || !Sage || !Sgender || !Sgrade || !Saddress || !Pname || !Pemail || !Pphone || !Poccupation || !Paddress || transportation === undefined || !sourceOfInfo) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    // Create a new inquiry document
    const newInquiry = new Inquiry({
      Sname,
      Sage,
      Sgender,
      Sgrade,
      Saddress,
      Pname,
      Pemail,
      Pphone,
      Poccupation,
      Paddress,
      transportation,
      sourceOfInfo,
    });

    // Save inquiry to the database
    const savedInquiry = await newInquiry.save();

    res.status(201).json({
      message: "Enquiry form sent successfully",
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
