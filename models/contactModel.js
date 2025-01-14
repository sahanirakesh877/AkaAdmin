// models/contactModel.js
import mongoose from "mongoose";

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
); 

// Create the model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
