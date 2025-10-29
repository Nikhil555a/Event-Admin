// import express from "express";
// import protect from "../middleware/auth.js";
// import { createEvent, getEvents ,getEventById } from "../controllers/eventsController.js";

// const eventRouter = express.Router();

// // create event (protected)
// eventRouter.post("/", protect, createEvent);

// // get all events (protected)
// eventRouter.get("/", protect, getEvents);

// // ✅ get single event by id (protected)
// eventRouter.get("/:id", protect, getEventById);

// export default eventRouter;



import express from "express";
import protect from "../middleware/auth.js";
import {
  createEvent,
  getEvents,
  getEventById,
  getEventTickets, // ✅ added
} from "../controllers/eventsController.js";

const eventRouter = express.Router();

// Create event (protected)
eventRouter.post("/", protect, createEvent);

// Get all events (protected)
eventRouter.get("/", protect, getEvents);

// Get single event by id (protected)
eventRouter.get("/:id", protect, getEventById);

// ✅ Get all tickets of a specific event
eventRouter.get("/:id/tickets", protect, getEventTickets);

export default eventRouter;
