import React from "react";
import Image from "next/Image";
import Link from "next/Link";

const CharacterDetail = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  location,
  origin,
  image,
}) => {
    console.log(location)
  return (
    <div className="flex flex-row p-4 justify-center gap-2 border mt-4 rounded-lg">
      <Link href={`/resident/${id}`}>
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
        </div>
      </Link>
    </div>
  );
};

export default CharacterDetail;
