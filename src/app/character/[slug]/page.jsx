"use client";
import React, { useEffect, useState } from "react";
import { getCharacter } from "@/lib/api";
import { addNewNote, getCharacterNotes } from "@lib/actions";
import CharacterDetail from "@components/CharacterDetail/CharacterDetail";
import NotesDialog from "@components/NotesDialog/NotesDialog";

const Detail = ({ params }) => {
  const [character, setCharacter] = useState({});
  const [modalData, setModalData] = useState({});
  const [notes, setNotes] = useState("");
  const [characterNotes, setCharacterNotes] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacter(params.slug);
        if (response) {
          setCharacter(response);
          const res = await getCharacterNotes(params.slug);
          if (res) {
            setCharacterNotes(res);
          } else {
            setError("An error occurred");
          }
        }
      } catch (error) {
        console.log(error);
        setError(error.toString());
      }
    };

    fetchCharacter();
  }, [notes, params.slug]);

  const handleAddNote = (character) => {
    document.getElementById("notesDialog").showModal();
    setModalData(character);
  };

  const handleClearSuccessOrError = () => {
    setSuccess("");
    setError("");
  };

  const onChange = (e) => {
    e.preventDefault();
    setNotes(e.target.value);
  };

  const saveNote = async () => {
    let data = {
      characterId: character.id.toString(),
      notes: notes.toString(),
    };
    try {
      const res = await addNewNote(data);
      setCharacterNotes((notes) => [...notes, res]);
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
        onChange={onChange}
        saveNote={saveNote}
        error={error}
        success={success}
        onClick={handleClearSuccessOrError}
      />
      {error && <div className="p-2 text-orange-500">{error.toString()}</div>}
      {character.location && (
        <>
          <CharacterDetail
            {...character}
            onClick={() => handleAddNote(character)}
            characterId={character.id}
            characterNotes={characterNotes}
          />
        </>
      )}
    </div>
  );
};

export default Detail;
