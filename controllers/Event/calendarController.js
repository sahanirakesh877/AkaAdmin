import Calendar from "../../models/calendarModel.js";

// Get all galleries
export const getCalendar = async (req, res) => {
  try {
    const calendar = await Calendar.find();
    if (calendar.length == 0) {
      return res.status(404).json({ message: "No Calendar found" });
    }
    res.status(200).json({
      message: "Calendar fetched successfully",
      calendar,
    });
  } catch (error) {
    console.error("Error fetching heroes:", error);
    res.status(500).json({ message: "Error fetching heroes" });
  }
};
