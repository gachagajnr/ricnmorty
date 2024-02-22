"use client";
import React from "react";

const NotesDialog = ({ name, saveNote, onChange, error, success, onClick }) => {
  return (
    <dialog
      id="notesDialog"
      className="p-8 shadow-lg rounded-lg  w-3/5 absolute "
    >
      <h2 className="font- text-sm text-start py-1">Add Notes for {name}</h2>
      {error && <h2 className="p-1 text-red-400 text-sm">{error}</h2>}
      {success && (
        <h2 className="p-1 text-green-400 text-sm text-pretty">
          {success} added successfully
        </h2>
      )}

      <div className="modal-action">
        <form method="dialog">
          <button
            onClick={onClick}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
      </div>
      <form action={saveNote} className="grid gap-2">
        <textarea
          type="text"
          placeholder="Add any notes about this character"
          name="notes"
          onChange={onChange}
          cols={16}
          rows={8}
          className=" p-2 border border-blue-300 rounded-lg "
        />
        <div className="grid justify-end">
          <button className="py-1 bg-blue-600 text-white rounded-lg  w-32  ">
            Save
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default NotesDialog;
