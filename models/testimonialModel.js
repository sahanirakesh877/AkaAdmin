import mongoose from "mongoose";

// Define the schema for SpecialCamps
const testimonialSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageKey: {
      type: String,
    },
    bucket: {
      type: String,
    },
    mime: {
      type: String,
    },
  },

);

// Create a model from the schema
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
