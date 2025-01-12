import mongoose from "mongoose";

const amunSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    imageKey: { type: String },
    bucket: { type: String },
    mime: { type: String },
  },
 
);

const Amun = mongoose.model("AMUN", amunSchema);

export default Amun;
