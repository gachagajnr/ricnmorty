"use client";
import React, { useEffect, useState } from "react";
import { getCharacter } from "@/lib/api";
import { addNewNote } from "@lib/actions";

import CharacterDetail from "@components/CharacterDetail/CharacterDetail";
import NotesDialog from "@components/NotesDialog/NotesDialog";

const Detail = ({ params }) => {
  const [character, setCharacter] = useState({});
  const [modalData, setModalData] = useState({});
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacter(params.slug);
        // if (response.status === 200) {
        if (response) {
          // setCharacter(response.data);
          setCharacter(response);
        }
      } catch (error) {}
    };

    fetchCharacter();
  }, []);

  const handleAddNote = (characterData) => {
    document.getElementById("notesDialog").showModal();
    setModalData(characterData);
  };

  const handleClearSuccessOrError = () => {
    setSuccess("");
    setError("");
  };

  const saveNote = async () => {
    let data = { characterId: character.id, notes: notes };
    try {
      const res = await addNewNote(data);
      setSuccess(res.notes);
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <div className=" mt-12">
      <div className="py-1 text-center">
        <h1 className="font-light text-4xl">Character Information</h1>
      </div>
      <NotesDialog
        name={modalData.name}
        saveNote={saveNote}
        error={error}
        success={success}
        onClick={handleClearSuccessOrError}
      />
      {character.location && (
        <>
          <CharacterDetail
            {...character}
            onClick={() => handleAddNote(character)}
          />
        </>
      )}
    </div>
  );
};

export default Detail;