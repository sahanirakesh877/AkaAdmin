import User from "../../models/GetTouchModel.js";

// POST: Create a new user
export const registerUser = async (req, res) => {
  try {
    const {email } = req.body;

    // Create and save the user
    const newUser = new User({ email });
    await newUser.save();

    res.status(201).json({ message: "User email sent successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};






