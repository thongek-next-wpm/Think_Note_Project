import Note from "../models/note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getAllNotes controller", error);
    res.status(500).json({ message: error.message });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res.status(201).json({message:"Note created successfully", note: newNote})
  } catch (error) {
    console.error("error in createNote controller", error);
    res.status(500).json({ message: error.message });
  }
}

export async function updateNote(req, res) {
  try {
  } catch (error) {}
}

export async function deleteNote(req, res) {
  try {
  } catch (error) {}
}
