import express from "express";
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notescontroller.js";

const router = express.Router();

// Get all notes
router.get("/", getAllNotes);

// get a single note by ID
router.get("/:id", getNoteById);

// Create a new note
router.post("/", createNote);

// Update a note
router.put("/:id", updateNote);

// Delete a note
router.delete("/:id", deleteNote);

export default router;
