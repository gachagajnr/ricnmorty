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

  const handleLeaveNote = (character) => {
    document.getElementById("notesDialog").showModal();
    setModalData(character);
  };

  const onChange = (e) => {
    setNotes(e.target.value);
  };

  const saveNotes = async () => {
    let data = { characterId: character.id, notes: notes };
    try {
      const res = await addNewNote(data);
      setSuccess(res.notes);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" mt-12">
      <div className="py-1 text-center">
        <h1 className="font-light text-4xl">Character Information</h1>
      </div>
      <NotesDialog
        name={modalData.name}
        onChange={onChange}
        saveNotes={saveNotes}
        error={error}
        success={success}
      />

      {character.location && (
        <>
          <CharacterDetail
            {...character}
            onClick={() => handleLeaveNote(character)}
          />
        </>
      )}
    </div>
  );
};

export default Detail;
