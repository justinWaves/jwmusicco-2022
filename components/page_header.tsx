import React from "react";
import Image from "next/image";
import jwlogo from "../public/JWMC-Logo-2022.png";

function header() {
  return (
    <div className=" bg-pink-50 flex flex-row w-screen max-w-4xl justify-center">
      <div className="w-1/2 h-100 ">
        <Image src={jwlogo} alt="jwmc logo"></Image>
      </div>
      <button className="w-16 h-16 border rounded-lg"></button>
    </div>
  );
}

export default header;
