import Contact from "../../models/contactModel.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    const savedContact = await newContact.save();

    res.status(201).json({
      message: " Your Contact sent successfully",
      contact: savedContact,
    });
  } catch (error) {
    console.error("Error Details:", error);
    res
      .status(500)
      .json({ message: "Error creating contact", error: error.message });
  }
};
