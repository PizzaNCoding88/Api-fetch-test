import Image from "next/image";
import React from "react";

const Card = (props) => {
  const { data: d } = props;
  return (
    <>
      <div className="border-2 border-gray-600 rounded-lg py-3 px-4  flex flex-col-reverse items-center gap-8">
        <div>
          <p className="inline text-white font-bold">First Name: </p>
          <p className="inline text-white">{d.firstName}</p>
          <br></br>
          <p className="inline text-white font-bold">Last Name: </p>
          <p className="inline text-white">{d.lastName}</p>
          <br></br>
          <p className="inline text-white font-bold">Maiden Name: </p>
          <p className="inline text-white">{d.maidenName}</p>
          <br></br>
          <p className="inline text-white font-bold">Birth Date: </p>
          <p className="inline text-white">{d.birthDate}</p>
          <br></br>
          <p className="inline text-white font-bold">Age: </p>
          <p className="inline text-white">{d.age}</p>
          <br></br>
          <p className="inline text-white font-bold">Gender: </p>
          <p className="inline text-white">{d.gender}</p>
          <br></br>
          <p className="inline text-white font-bold">Hair Color: </p>
          <p className="inline text-white">{d.hair.color}</p>
          <br></br>
          <p className="inline text-white font-bold">Hair Style: </p>
          <p className="inline text-white">{d.hair.type}</p>
          <br></br>
        </div>
        <div className="bg-white bg-opacity-50 flex justify-center items-center">
          <Image alt="profile" src={d.image} width={200} height={200} />
        </div>
      </div>
    </>
  );
};

export default Card;
