"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Character from "@components/Character/Character";
import { getCharacters } from "../lib/api";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [filteredData, setfilteredData] = useState(characters);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters();
        console.log(response);
        setCharacters(response);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    fetchCharacters();
  }, []);
  useEffect(() => {
    setfilteredData(characters);
  }, [characters]);

  function handleSearch(e) {
    const value = e.target.value;
    setSearchValue(value);
    filterData(value);
  }

  function filterData(searchValue) {
    const filteredData = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        character.location.name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    });
    setfilteredData(filteredData);
  }

  return (
    <div className="grid justify-center">
      <div className="p-4 text-center">
        <h1 className="text-4xl font-light">Ric and Morty Characters</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Characters by name or location"
          className="input input-md rounded-lg border-2 w-3/5 border-cyan-600 p-4 mt-3"
        />
      </div>
      <div className="overflow-auto">
        {filteredData.map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
}
