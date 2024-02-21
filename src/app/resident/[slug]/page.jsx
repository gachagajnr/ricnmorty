"use client";
import React, { useEffect, useState } from "react";
import { getCharacter } from "@/lib/api";
import CharacterDetail from "@components/CharacterDetail/CharacterDetail";

const Detail = ({ params }) => {
  const [character, setCharacter] = useState({});
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacter(params.slug);
        if (response.status === 200) {
          setCharacter(response.data);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacter();
  }, []);

  const handleLeaveNote = (character) => {
    setOpen((prev) => !prev);
    setModalData(character);
  };

  const onChange = (e) => {
    setNotes(e.target.value);
  };

  const saveNotes = () => {
    console.log(notes, character.id,);
  };

  return (
    <div className="grid justify-center mt-12">
      <dialog open={open} className="p-6 shadow-lg rounded-lg content-center">
        <h2 className="font- text-sm text-start py-1">
          Add Notes for {modalData.name}
        </h2>
        <form action={saveNotes} className="grid gap-2">
          <textarea
            type="text"
            placeholder="Add Notes"
            name="notes"
            onChange={onChange}
            cols={20}
            rows={4}
            className=" p-2 border border-r-2 rounded-lg "
          />

          <button className="py-1 bg-blue-600 text-white rounded-lg">Save</button>
        </form>
      </dialog>
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
