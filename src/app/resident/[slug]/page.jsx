"use client";
import React, { useEffect, useState } from "react";
import { getCharacter } from "@/lib/api";
import CharacterDetail from "@components/CharacterDetail/CharacterDetail";

const Detail = ({ params }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacter(params.slug);
        console.log(response);
        if (response.status === 200) {
          setCharacter(response.data);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacter();
  }, []);

  return <div>{character.location && <CharacterDetail {...character} />}</div>;
};

export default Detail;
