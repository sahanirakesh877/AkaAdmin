import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    Studentname: { type: String, },
    Studentage: { type: Number, },
    Studentgender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    StudentGrade: {
      type: String,
      enum: [
        "Daycare",
        "Pre-ECD",
        "ECD-1",
        "ECD-2",
        "ECD-3",
        "Grade-1",
        "Grade-2",
        "Grade-3",
        "Grade-4",
        "Grade-5",
        "Grade-6",
        "Grade-7",
        "Grade-8",
        "Grade-9",
        "Grade-10",
        "Grade-12",
      ],
      required: true,
    },
    Studentaddress: { type: String, },

    Parentname: { type: String, },
    Parentemail: { type: String, },
    Parentphone: { type: String, },
    Parentoccupation: { type: String, },
    Parentaddress: { type: String, },

    transportation: {
      type: Boolean,
      required: true,
    },
    sourceOfInfo: {
      type: String,
      enum: [
        "Advertisement",
        "Websites",
        "Social Media",
        "Friends or Suggestions ",
        "Other",
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
