import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
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
  {
    timestamps: true,
  }
);

const NoticeImage = mongoose.model("Notices", noticeSchema);

export default NoticeImage;
