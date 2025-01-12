import mongoose from "mongoose";

const SeniorSchoolSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    imageKey: { type: String },
    bucket: { type: String },
    mime: { type: String },
  },
 
);

const SeniorSchool = mongoose.model("Senior School", SeniorSchoolSchema);

export default SeniorSchool;
