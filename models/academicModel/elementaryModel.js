import mongoose from "mongoose";

const ElementarySchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    imageKey: { type: String },
    bucket: { type: String },
    mime: { type: String },
  },
 
);

const Elementary = mongoose.model("Elementary School", ElementarySchema);

export default Elementary;
