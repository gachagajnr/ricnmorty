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
