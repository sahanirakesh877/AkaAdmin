import Notice from "../../models/noticeModel.js";

// Get all galleries
 export const getNotice = async (req, res) => {
  try {
    const notice = await Notice.find();
    if (notice.length == 0) {
      return res.status(404).json({ message: "No notice found" });
    }
    res.status(200).json({
      message: "notice fetched successfully",
      notice,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notice", error });
  }
};





