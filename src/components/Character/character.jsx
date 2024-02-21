"use client";
import React from "react";
import Image from "next/Image";
import Link from "next/Link";
import { useRouter } from "next/navigation";

const Character = ({
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
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/character/${id}`)}
      className="flex flex-row  flex-wrap gap-4 p-4 shadow-lg justify-start cursor-pointer hover:-translate-y-2  duration-150 hover:bg-slate-200  rounded-lg mt-6 mx-4"
    >
      <Image
        src={image}
        width={200}
        height={250}
        alt={name}
        className="object-contain p-2"
      />

      <div className="flex flex-col">
        <h1>
          <span className="text-sm font-semibold">Name: </span>
          {name}
        </h1>
        <h2>
          <span className="text-sm font-semibold">Status: </span>
          {status}
        </h2>
        <h2>
          <span className="text-sm font-semibold">Species: </span>
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
      </div>
    </div>
  );
};

export default Character;
