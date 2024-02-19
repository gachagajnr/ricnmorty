import React from "react";
import Image from "next/Image";

const character = ({
  name,
  status,
  species,
  type,
  gender,
  location,
  origin,
  image,
}) => {
  return (
    <div className="flex flex-row p-4 justify-center gap-2 border   border-gray-700 rounded-lg">
      <div>
        <Image src={""} width={150} height={150} alt="" />
      </div>
      <div>
        <h1>
          <span className="text-sm font-bold">Name:</span>
          {character.name}
        </h1>
        <h2>
          <span className="text-sm font-bold">Status: </span>
          {character.status}
        </h2>
        <h2>
          <span className="text-sm font-bold">Status: </span>
          {character.species}
        </h2>
        <h2>
          <span className="text-sm font-bold">Gender: </span>
          {character.gender}
        </h2>
        <h2>
          <span className="text-sm font-bold">Type: </span>
          {character.type}
        </h2>
        <h2>
          <span className="text-sm font-bold">Location: </span>
          {character.location.name}
        </h2>
        <h2>
          <span className="text-sm font-bold">Resident Url: </span>
          {character.location.url}
        </h2>
        <h2>
          <span className="text-sm font-bold">Image: </span>
          {character.image}
        </h2>
        <h2>
          <span className="text-sm font-bold">Url: </span>
          {character.url}
        </h2>
      </div>
    </div>
  );
};

export default character;
