import mongoose from "mongoose";

const MiddleSchoolSchema = new mongoose.Schema(
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

const MiddleSchools = mongoose.model("Middle School", MiddleSchoolSchema);

export default MiddleSchools;
