import React from "react";
import Image from "next/Image";
 
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
  console.log(location);
  return (
    <div className="justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row p-4 justify-center gap-2   mt-4 rounded-lg">
          <div>
            <Image src={image} width={250} height={600} alt="" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-sm font-thin">Name:</h6>
            <h6 className="text-xl font-semibold ml-4">{name}</h6>

            <span className="text-sm font-thin">Status: </span>
            <h6 className="text-lg font-semibold ml-4 ">{status}</h6>

            <span className="text-sm font-thin">Species: </span>
            <h6 className="text-md font-semibold ml-4 ">{species}</h6>

            <div className="flex flex-row py-1">
              <span className="text-sm font-thin">Gender: </span>
              <h6 className="text-sm font-semibold ml-1 ">{gender}</h6>
            </div>
            <div className="flex flex-row py-1">
              <span className="text-sm font-thin">Origin: </span>
              <h6 className="text-sm font-semibold ml-1 ">{origin.name}</h6>
            </div>
            <div className="flex flex-row py-1">
              <span className="text-sm font-thin">Location: </span>
              <h6 className="text-sm font-semibold ml-1 ">{location.name}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
