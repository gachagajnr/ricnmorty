import React from "react";

const Notes = ({ characterNotes }) => {
  return (
    <div>
      {characterNotes.map((note) => {
        return (
          <div key={note._id} className="p-2 mt-1 shadow-md rounded-lg">
            <p className="text-lg">{note.notes}</p>
            <span className="text-xs font-semibold">
              {note.createdAt.toString()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
