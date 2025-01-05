import mongoose from "mongoose";

// Define the Event Schema for each event in the calendar
const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },

  },

);

// Define the Calendar Schema with Month and Events
const CalendarSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true, 
    },
    events: [EventSchema], 
  },

);

// Create a model for the Calendar
const Calendar = mongoose.model("Calendar", CalendarSchema);

export default Calendar;

