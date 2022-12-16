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
    <div className="flex h-screen w-screen md:w-1/3 md:h-full rounded-none bg-slate-100 md:bg-slate-800 text-white absolute right-0 z-10">
      <div className=" flex flex-col w-full ">
        <button
          className="h-12 w-12  border rounded-full absolute right-3 top-3 text-black md:text-white border-black md:border-white hover:bg-slate-200 md:hover:bg-slate-400"
          onClick={onCancel}
        >
          <CloseIcon />
        </button>

        {/* <div className=" md:hidden md:p-10 mx-auto p-10">
          <Link href="/">
            <Image src={jwLogoBlack} alt="jwmc logo"></Image>
          </Link>
        </div> */}

        <div className=" hidden md:block p-20 md:p-10">
          <Link href="/">
            <Image src={jwLogo} alt="jwmc logo"></Image>
          </Link>
        </div>

        <div className="md:hidden mr-3 text-black my-auto">
          <PianoMenuMobile />
        </div>

        <div className=" hidden md:block">
          <h3 className="text-2xl font-bold  p-6 text-right md:hover:bg-slate-400 rounded-md">
            <Link href="/about">
              <a className=" ">About &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold  p-6 text-right  md:hover:bg-slate-400 rounded-md">
            <Link href="/past-work">
              <a className=" ">Past Work &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold  p-6 text-right  md:hover:bg-slate-400 rounded-md">
            <Link href="/education">
              <a className=" ">Education &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold  p-6 text-right  md:hover:bg-slate-400 rounded-md">
            <Link href="/productionService">
              <a className=" ">Production Services &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold p-6 text-right  md:hover:bg-slate-400 rounded-md">
            <Link href="/mixingMastering">
              <a className=" ">Mixing & Mastering &rarr;</a>
            </Link>
          </h3>
        </div>
        <div className="md:hidden">{/* <Footer /> */}</div>
      </div>
    </div>
  );
}

export default dropDownMenu;
