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
    <div className="flex  flex-col justify-center align-middle  p-4 rounded-lg shadow-lg  ">
      <div className="flex flex-row justify-between py-2">
        <button
          onClick={() => router.back()}
          className="text-sm font-semibold text-red-400"
        >
          Go Back
        </button>
        <h6 className="text-2xl font-semibold ">{name}</h6>
      </div>
      <div className="flex flex-col w-full flex-wrap">
        <Image src={image} width={250} height={300} alt={name} />
        <div>
          <div className="flex flex-col justify-start p-2">
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
            <div>
              <div className="flex flex-row justify-between py-2">
                <h2 className="text-center pt-2 font-bold text-2xl">Character Notes</h2>
                <button
                  onClick={onClick}
                  className="border cursor-pointer  border-blue-400 text-white text-sm bg-blue-600 w-28 p-1 text-center rounded-lg"
                >
                  Add Notes
                </button>
              </div>
            </div>
            <div className="grid justify-start gap-2">
              <h6 className="text-md text-pretty ">Lorem ipsum dolor sit</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;

{
  /* <div className="flex flex-row justify-between py-2">
  <button
    onClick={() => router.back()}
    className="text-sm font-thin text-red-400"
  >
    Go Back
  </button>
  <h6 className="text-md font-semibold ">{name}</h6>
</div>; */
}

{
  /* <div className="flex flex-row justify-between py-1">
  <h2 className="text-center pt-2 font-bold">Character Information</h2>
  <button
    onClick={onClick}
    className="border cursor-pointer  border-blue-400 text-white text-sm bg-blue-600 w-28 p-1 text-center rounded-lg"
  >
    Add Notes
  </button>
</div>; */
}
