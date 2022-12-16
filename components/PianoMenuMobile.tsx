import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

function PianoMenuMobile() {
  return (
    <div className="mt-5 flex flex-wrap w-full  mr-10 text-slate-900 ">
      <div className=" flex flex-col w-full md:w-1/2 md:mx-auto">
        <img
          src="/jw-logo-round.svg"
          alt=""
          className="w-0 md:w-32 mb-4 mx-auto "
        />
        <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/about">
            <a className=" ">About &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black absolute top-60% left-0 md:left-40"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/past-work">
            <a className=" ">Demo Reel &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black absolute top-100 left-0 md:left-40"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/education">
            <a className=" ">Education &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black  absolute top-100 left-0 md:left-40"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/productionService">
            <a className=" ">Production Services &rarr;</a>
          </Link>
        </h3>

        <h3 className="text-2xl font-bold rounded-xl border-black border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/mixingMastering">
            <a className=" ">Mixing & Mastering &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black  absolute top-100 left-0 md:left-40"></div>
        </h3>
        <div className="text-5xl pl-3 font-bold rounded-xl border-black border p-6 text-right  bg-white  shadow-md hover:bg-gray-50">
          <a href="">
            <InstagramIcon fontSize="inherit" className="" />
          </a>
          <FacebookIcon fontSize="inherit" className="" />
          <EmailIcon fontSize="inherit" className="" />
        </div>
      </div>
    </div>
  );
}

export default PianoMenuMobile;
