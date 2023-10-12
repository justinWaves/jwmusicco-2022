import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

function PianoMenuMobile() {
  return (
    <div className="mt-5 flex flex-wrap w-full  mr-10 text-slate-900 ">
      <div className=" flex flex-col w-full md:w-1/2 md:mx-auto">
<Link href="/"> 
        <img
          src="/jw-logo-round.svg"
          alt=""
          className="w-0 md:w-32 mb-10 mx-auto cursor-pointer"
        />
</Link>
        <h3 className="text-2xl font-bold rounded-r-lg md:rounded-xl border-black  border p-6 text-right hover:text-teal-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/about">
            <a className="font-thin text-xl md:text-3xl">About &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black absolute top-60% left-0 md:left-32 rounded-r-md md:rounded-md"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-r-lg md:rounded-xl border-black  border p-6 text-right hover:text-teal-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/works">
            <a className="font-thin text-xl md:text-3xl">Works &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black absolute top-100 left-0 md:left-32 rounded-r-md md:rounded-md"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-r-lg md:rounded-xl border-black  border p-6 text-right hover:text-teal-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/education">
            <a className="font-thin text-xl md:text-3xl">Education &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black  absolute top-100 left-0 md:left-32 rounded-r-md md:rounded-md"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-r-lg md:rounded-xl border-black  border p-6 text-right hover:text-teal-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/production-services">
            <a className="font-thin text-xl md:text-3xl">Production Services &rarr;</a>
          </Link>
        </h3>

        <h3 className="text-2xl font-bold rounded-r-lg md:rounded-xl border-black border p-6 text-right hover:text-teal-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/mixing-mastering">
            <a className="font-thin text-xl md:text-3xl">Mixing & Mastering &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black  absolute top-100 left-0 md:left-32 rounded-r-md md:rounded-md"></div>
        </h3>
        <div className="text-7xl pr-5 font-bold rounded-r-lg md:rounded-xl border-black border p-1 text-right  bg-white  shadow-md hover:bg-gray-50">
        <a
              href="https://www.instagram.com/jwmusicco/"
              target="_blank"
              rel="noopener"
            >
            <InstagramIcon fontSize="inherit" className="hover:text-teal-600" />
          </a>
          <a
              href="https://www.facebook.com/jwmusicco"
              target="_blank"
              rel="noopener"
            >
          <FacebookIcon fontSize="inherit" className="hover:text-teal-600" />
          </a>
          <a href="mailto:jwmusicco@gmail.com">
          <EmailIcon fontSize="inherit" className="hover:text-teal-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PianoMenuMobile;
