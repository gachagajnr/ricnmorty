import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    characterId: {
      type: Number,
      required: true,
      // unique: true,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);
