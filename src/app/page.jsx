"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Character from "@components/Character/Character";
import { getCharacters } from "../lib/api";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");
  const [filteredData, setfilteredData] = useState(characters);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getCharacters();
      console.log(response[0].results);
      if (response[0].results) {
        setCharacters(response[0].results);
      } else {
        setError(response.message);
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
          .includes(searchValue.toLowerCase()) ||
        character.type.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setfilteredData(filteredData);
  }

  return (
    <div>
      <div className="p-4 text-center mx-4">
        <h1 className="text-4xl font-light">Ric N Morty</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Characters by name or location"
          className="input input-md rounded-lg border-2   border-cyan-600 p-4 mt-3"
        />
      </div>

      {filteredData.length ? (
        filteredData.map((character) => (
          <Character key={character.id} {...character} />
        ))
      ) : (
        <div className="text-center text-orange-400">{error}</div>
      )}
    </div>
  );
}
