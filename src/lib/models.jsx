import mongoose from "mongoose";
const notesSchema = new mongoose.Schema({
  characterId: {
    type: String,
    required: true,
    unique: true,
  },
  notes: {
    type: String,
    required: true,
  },
});
