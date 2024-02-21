"use client";
import React, { useEffect, useState } from "react";
import { getCharacter } from "@/lib/api";
import CharacterDetail from "@components/CharacterDetail/CharacterDetail";
import NotesDialog from "@components/NotesDialog/NotesDialog";

const Detail = ({ params }) => {
  const [character, setCharacter] = useState({});
  const [modalData, setModalData] = useState({});
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacter(params.slug);
        console.log(response);
        // if (response.status === 200) {
        if (response) {
          // setCharacter(response.data);
          setCharacter(response);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
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

  const saveNotes = () => {
    console.log(notes, character.id);
  };

  return (
    <div className="grid justify-center mt-12">
      <NotesDialog
        name={modalData.name}
        onChange={onChange}
        saveNotes={saveNotes}
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
