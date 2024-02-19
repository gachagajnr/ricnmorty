"use client";
import React from "react";
import { getCharacter } from "../lib/api";

const Detail = ({ params }) => {
  console.log(params);

  useEffect(() => {
    const fetchCharacter= async () => {
      try {
        const response = await getCharacter();
        console.log(response);
        setCharacters(response);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacter();
  }, []);
  return <div>Detail</div>;
};

export default Detail;
