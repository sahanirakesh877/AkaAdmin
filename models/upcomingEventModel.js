import mongoose from "mongoose";

// Define the schema for upcoming events
const UpcomingEventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true, 
});

// Create the model
const UpcomingEvent = mongoose.model('UpcomingEvent', UpcomingEventSchema);

export default UpcomingEvent;
