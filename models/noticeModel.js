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
 
);

const NoticeImage = mongoose.model("Notices", noticeSchema);

export default NoticeImage;
