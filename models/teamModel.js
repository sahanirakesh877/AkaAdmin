import mongoose from "mongoose";

// Define the schema for SpecialCamps
const teamSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Position: {
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
  {
    timestamps: true,
  }
);

// Create a model from the schema
const Teams = mongoose.model("Team", teamSchema);

export default Teams;
