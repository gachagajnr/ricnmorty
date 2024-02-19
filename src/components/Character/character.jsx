import React from "react";
import Image from "next/Image";

const Character = ({
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
    <div className="flex flex-row p-4 justify-center gap-2 border mt-4 border-gray-700 rounded-lg">
      <div>
        <Image src={image} width={150} height={150} alt="" />
      </div>
      <div className="flex flex-col">
        <h1>
          <span className="text-sm font-semibold">Name:</span>
          {name}
        </h1>
        <h2>
          <span className="text-sm font-semibold">Status: </span>
          {status}
        </h2>
        <h2>
          <span className="text-sm font-semibold">Status: </span>
          {species}
        </h2>
        <h2>
          <span className="text-sm font-semibold">Gender: </span>
          {gender}
        </h2>
        <h2>
          <span className="text-sm font-semibold">Type: </span>
          {type}
        </h2>
        <h2>
          <span className="text-sm font-semibold">Location: </span>
          {location.name}
        </h2>
        <h2>
          <span className="text-sm font-semibold">Resident Url: </span>
          {location.url}
        </h2>
        <h2>
          <span className="text-sm font-semibold">Image: </span>
          {image}
        </h2>
        {/* <h2>
          <span className="text-sm font-semibold">Url: </span>
          {url}
        </h2> */}
      </div>
    </div>
  );
};

export default Character;
