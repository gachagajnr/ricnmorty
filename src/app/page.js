"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Character from "@components/Character/Character";
import { getCharacters } from "../lib/api";

export default function Home() {
  const [characters, setCharacters] = useState([]);

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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ric and Morty</h1>

      {characters.map((character) => (
        <Character key={character.id} />
      ))}
    </main>
  );
}
