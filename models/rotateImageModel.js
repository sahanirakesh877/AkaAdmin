import mongoose from "mongoose";

const RotategallerySchema = new mongoose.Schema(
  {
    
    image: {
      type: String,
    },
    imageKey: { type: String },
    bucket: { type: String },
    mime: { type: String },
  },
  {
    timestamps: true,
  }
);

const RotateImage = mongoose.model("RotateImage", RotategallerySchema);

export default RotateImage;
