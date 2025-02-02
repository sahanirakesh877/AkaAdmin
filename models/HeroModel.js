import mongoose from "mongoose";

const heroImageSchema = new mongoose.Schema(
  {
  
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
  { timestamps: true }
 
);

const HeroImage = mongoose.model("HeroImage", heroImageSchema);

export default HeroImage;
