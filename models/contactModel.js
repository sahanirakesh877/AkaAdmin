// models/contactModel.js
import mongoose from "mongoose";

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,

      trim: true,
      lowercase: true,
    },
    phone: {
      type: Number,

      trim: true,
    },
    message: {
      type: String,

      trim: true,
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

// Create the model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
