"use server";

import { connectDb } from "./utils";
import { Note } from "./models";

export const addNewNote = async (data) => {
  try {
    connectDb();
    const res = new Note(data);
    const createdNote = await res.save();
    return createdNote;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteNote = async (noteId) => {
  try {
    connectDb();
    const deletedNote = await Note.findByIdAndDelete(noteId);
    return deletedNote;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCharacterNotes = async (characterId) => {
  try {
    connectDb();
    const characterNotes = await Note.find({ characterId: characterId });
    return characterNotes;
  } catch (error) {
    throw new Error(error);
  }
};
