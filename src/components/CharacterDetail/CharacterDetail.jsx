"use client";
import React from "react";
import Image from "next/Image";
import { useRouter } from "next/navigation";

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
  onClick,
  notes,
}) => {
  const router = useRouter();
  return (
    <div className="grid justify-center">
      <div className="flex flex-row justify-between py-2">
        <button onClick={() => router.back()} className="text-md font-thin ">
          Go Back
        </button>
        <h6 className="text-xl font-semibold ">{name}</h6>
      </div>

      <Image src={image} width={300} height={600} alt={name} />
      <div>
        <div className="flex flex-row justify-between py-1">
          <h2 className="text-center pt-2 font-bold">Character Information</h2>
          <button
            onClick={onClick}
            className="border  border-blue-400 text-white text-sm bg-blue-600 w-28 p-1 text-center rounded-lg"
          >
            Add Notes
          </button>
        </div>
        <div className="grid justify-start p-2">
          <div className="flex flex-row  gap-2">
            <span className="text-sm font-thin">Status: </span>
            <h6 className="text-md font-semibold ">{status}</h6>
          </div>
          <div className="flex flex-row  gap-2">
            <span className="text-sm font-thin">Species: </span>
            <h6 className="text-md font-semibold">{species}</h6>
          </div>
          <div className="flex flex-row  gap-2">
            <span className="text-sm font-thin">Gender: </span>
            <h6 className="text-md font-semibold">{gender}</h6>
          </div>
          <div className="flex flex-row  gap-2">
            <span className="text-sm font-thin">Origin: </span>
            <h6 className="text-md font-semibold">{origin.name}</h6>
          </div>
          <div className="flex flex-row  gap-2">
            <span className="text-sm font-thin">Location: </span>
            <h6 className="text-md font-semibold">{location.name}</h6>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="text-sm font-thin">Notes: </span>
            <h6 className="text-md font-semibold">{notes}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
