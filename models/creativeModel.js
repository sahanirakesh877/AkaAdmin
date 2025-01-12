import mongoose from "mongoose";

// Define the Program Schema
const creativeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
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

// Create and export the Program model
const Creative = mongoose.model("CreativeWeek", creativeSchema);

export default Creative;
