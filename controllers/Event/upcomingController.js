import Upcoming from "../../models/upcomingEventModel.js";

// Get all galleries
export const getUpcomingEvent = async (req, res) => {
  try {
    const upcomingevent = await Upcoming.find();
    if (upcomingevent.length == 0) {
      return res.status(404).json({ message: "No upcomingevent found" });
    }
    res.status(200).json({
      message: "upcomingevent fetched successfully",
      upcomingevent,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
