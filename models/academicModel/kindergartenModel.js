import mongoose from "mongoose";

const KinderGartenSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    imageKey: { type: String },
    bucket: { type: String },
    mime: { type: String },
  },
 
);

const KinderGarten = mongoose.model("KinderGarten School", KinderGartenSchema);

export default KinderGarten;
