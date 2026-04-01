import React from "react";
import Link from "next/link";
import Image from "next/image";

import jwLogo from "../public/white-jwmc.png";
import jwLogoBlack from "../public/JWMC-Logo-2022.png";
import CloseIcon from "@mui/icons-material/Close";
import PianoMenuMobile from "../components/PianoMenuMobile";

interface DropDownMenuProps {
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function dropDownMenu({ onCancel }: DropDownMenuProps) {
  return (
    <div className="flex h-screen w-screen rounded-none bg-slate-100 backdrop-blur-lg bg-opacity-30 text-white  right-0 z-10 overscroll-y-none overflow-y-hidden fixed">
      <div className=" flex flex-col w-full ">
        <button
          className="h-12 w-12  border rounded-full absolute right-3 top-3 md:right-10 md:top-10 text-slate-900 border-slate-900 hover:bg-opacity-100 bg-opacity-50 bg-slate-200"
          onClick={onCancel}
        >
          <CloseIcon />
        </button>

        <div className=" text-black my-auto">
          <PianoMenuMobile />
        </div>

        <div className="md:hidden">{/* <Footer /> */}</div>
      </div>
    </div>
  );
}

export default dropDownMenu;
