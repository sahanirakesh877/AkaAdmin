import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    Sname: { type: String, required: true },
    Sage: { type: Number, required: true },
    Sgender: {
      type: String,
      // enum: ["Male", "Female", "Other"],
      required: true,
    },
    Sgrade: {
      type: String,
      // enum: [
      //   "Daycare",
      //   "Pre-ECD",
      //   "ECD-1",
      //   "ECD-2",
      //   "ECD-3",
      //   "Grade-1",
      //   "Grade-2",
      //   "Grade-3",
      //   "Grade-4",
      //   "Grade-5",
      //   "Grade-6",
      //   "Grade-7",
      //   "Grade-8",
      //   "Grade-9",
      //   "Grade-10",
      //   "Grade-12",
      // ],
      required: true,
    },
    Saddress: { type: String, required: true },

    Pname: { type: String, required: true },
    Pemail: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // Email validation regex
    },
    Pphone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, // Phone number validation (example: 10 digits)
    },
    Poccupation: { type: String, required: true },
    Paddress: { type: String, required: true },

    transportation: {
      type: Boolean,
    },
    sourceOfInfo: {
      type: String,
      // enum: [
      //   "Advertisement",
      //   "Websites",
      //   "Social Media",
      //   "Friends or Suggestions",
      //   "Other",
      // ],
    },
  },
  {
    timestamps: true,
  }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
