import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  resultPdf: {
    type: String,

  },
  pdfKey: { type: String },
  bucket: { type: String },
  mime: { type: String },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const Result = mongoose.model("Result", resultSchema);

export default Result;
