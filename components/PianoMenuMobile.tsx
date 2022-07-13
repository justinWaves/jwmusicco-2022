import React from "react";
import Link from "next/link";

function PianoMenuMobile() {
  return (
    <div className="mt-6 flex  flex-wrap  mr-auto w-full md:hidden mr-10 mb-20">
      <div className=" flex flex-col w-full ">
        <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/about">
            <a className=" ">About &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black absolute top-60% left-0"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/demoReel">
            <a className=" ">Demo Reel &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black absolute top-100 left-0"></div>
        </h3>

        <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600 bg-white  shadow-md hover:bg-gray-50">
          <Link href="/education">
            <a className=" ">Education &rarr;</a>
          </Link>
          <div className="h-12 w-1/3 bg-black  absolute top-100 left-0"></div>
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
          <div className="h-12 w-1/3 bg-black  absolute top-100 left-0"></div>
        </h3>
      </div>
    </div>
  );
}

export default PianoMenuMobile;
