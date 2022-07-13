import React from "react";
import Link from "next/link";
import Image from "next/image";
import jwlogo from "../public/white-jwmc.png";
import CloseIcon from "@mui/icons-material/Close";
import PianoMenuMobile from "../components/PianoMenuMobile";

interface DropDownMenuProps {
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function dropDownMenu({ onCancel }: DropDownMenuProps) {
  return (
    <div className="flex h-screen w-screen md:w-1/3 md:h-full rounded-none bg-slate-800 text-white absolute right-0 z-10">
      <div className=" flex flex-col w-full ">
        <button
          className="h-12 w-12  border rounded-full absolute right-3 top-3  "
          onClick={onCancel}
        >
          <CloseIcon />
        </button>
        <div className=" w-full h-100 p-20 md:p-10">
          <Link href="/">
            <Image src={jwlogo} alt="jwmc logo"></Image>
          </Link>
        </div>

        <div className="md:hidden mr-3 text-black">
          <PianoMenuMobile />
        </div>

        <div className=" hidden md:block">
          <h3 className="text-2xl font-bold  p-6 text-right hover:border border-b-white rounded-md">
            <Link href="/about">
              <a className=" ">About &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold  p-6 text-right hover:border border-b-white rounded-md">
            <Link href="/demoReel">
              <a className=" ">Demo Reel &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold  p-6 text-right hover:border border-b-white rounded-md">
            <Link href="/education">
              <a className=" ">Education &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold  p-6 text-right hover:border border-b-white rounded-md">
            <Link href="/productionService">
              <a className=" ">Production Services &rarr;</a>
            </Link>
          </h3>

          <h3 className="text-2xl font-bold p-6 text-right hover:border border-b-white rounded-md">
            <Link href="/mixingMastering">
              <a className=" ">Mixing & Mastering &rarr;</a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default dropDownMenu;
