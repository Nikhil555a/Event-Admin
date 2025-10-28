import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: String, required: true },
  eventDate: { type: Date, required: true },
  description: { type: String }
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);
export default Event;
