import asyncHandler from "express-async-handler";
import Event from "../models/Event.js";

// @desc create event
// @route POST /api/events
// @access Private
export const createEvent = asyncHandler(async (req, res) => {
  const { name, eventDate, description } = req.body;
  if (!name || !eventDate) {
    return res.status(400).json({ message: "Name and eventDate required" });
  }
  const evt = await Event.create({
    name,
    eventDate,
    description,
    createdBy: req.admin.name || req.admin.email
  });
  res.status(201).json(evt);
});

// @desc get events
// @route GET /api/events
// @access Private
export const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});


// @desc Get single event by ID
// @route GET /api/events/:id
// @access Private
export const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.json(event);
});

