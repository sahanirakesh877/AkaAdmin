import User from "../../models/GetTouchModel.js";

// POST: Create a new user (subscription)
export const registerUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already subscribed." });
    }

    // Create and save the user
    const newUser = new User({ email });
    await newUser.save();

    res.status(201).json({ success: true, message: "Subscription successful!", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Server error.", error: error.message });
  }
};
