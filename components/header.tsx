import React from "react";
import Image from "next/image";
import jwlogo from "../public/JWMC-Logo-2022.png";

function header() {
  return (
    <header className="absolute top-8">
      <Image src={jwlogo} alt="jwmc logo"></Image>
    </header>
  );
}

export default header;
