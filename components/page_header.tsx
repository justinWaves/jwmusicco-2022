import React from "react";
import Image from "next/image";
import jwlogo from "../public/JWMC-Logo-2022.png";
import MenuIcon from "@mui/icons-material/Menu";
import DropDownMenu from "./dropDownMenu";
import Link from "next/link";
import { useState } from "react";

function header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
  };

  if (isMenuOpen) {
    return (
      <>
        <DropDownMenu onCancel={handleCancel} />
      </>
    );
  }

  console.log(isMenuOpen);

  return (
    <div className="flex flex-row w-screen max-w-4xl justify-between items-center px-5 pt-5">
      <div className="w-1/2 h-100 ">
        <Link href="/">
          <Image src={jwlogo} alt="jwmc logo"></Image>
        </Link>
      </div>

      <button
        className="w-16 h-16 border rounded-lg hover:bg-slate-100"
        onClick={menuClickHandler}
      >
        <MenuIcon />
      </button>
    </div>
  );
}

export default header;
