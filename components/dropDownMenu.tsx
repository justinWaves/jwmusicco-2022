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
    <div className="flex h-screen w-screen rounded-none bg-slate-100 backdrop-blur-lg bg-opacity-30 text-white absolute right-0 z-10 overscroll-y-none overflow-y-hidden ">
      <div className=" flex flex-col w-full ">
        <button
          className="h-12 w-12  border rounded-full absolute right-3 top-3 text-black border-black hover:bg-slate-200"
          onClick={onCancel}
        >
          <CloseIcon />
        </button>

        {/* <div className=" hidden md:block p-20 md:p-10">
          <Link href="/">
            <Image
              src={jwLogo}
              alt="jwmc logo"
              className="w-20
            "
            ></Image>
          </Link>
        </div> */}

        <div className=" text-black my-auto">
          <PianoMenuMobile />
        </div>

        <div className="md:hidden">{/* <Footer /> */}</div>
      </div>
    </div>
  );
}

export default dropDownMenu;
