import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function mixingMastering() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-begin bg-slate-100">
        <PageHeader />
        <div className="w-5/6 md:w-1/2 space-y-2">
          <div className="relative w-full">
            <h1 className="text-4xl text-white absolute left-0 right-0">
              Mixing & Mastering Services
            </h1>
            <img src="ssl-9000.jpg" alt="" />
          </div>
          <h1 className="text-5xl mt-10 mb-5">Mixing</h1>
          <div className="bg-slate-300 p-5 pl-10">
            <h2 className="text-2xl ">Stem Mixes- $250</h2>
            <p className="text-xs mb-3">Deliveries:</p>

            <ul className="list-disc">
              <li>Main pre-master</li>
              <li>Acapella (If applicable)</li>
              <li>+1 Recall Session</li>
            </ul>
          </div>
          <div className="bg-slate-200 p-5 pl-10">
            <h2 className="text-2xl ">Full Mixes (20 tracks maximum)- $300</h2>
            <p className="text-xs mb-3">Deliveries:</p>

            <ul className="list-disc">
              <li>Main pre-master</li>
              <li>Instrumental pre-master (If applicable)</li>
              <li>Acapella (If applicable)</li>
              <li>Mix Multitrack</li>
              <li>+2 Recall Sessions</li>
            </ul>
          </div>
          <div className="bg-slate-300 p-5 pl-10">
            <h2 className="text-2xl ">Full Mixes (20+ tracks)- $400</h2>
            <p className="text-xs mb-3">Deliveries:</p>

            <ul className="list-disc">
              <li>Main pre-master</li>
              <li>Instrumental pre-master (If applicable)</li>
              <li>Acapella (If applicable)</li>
              <li>Mix Multitrack</li>
              <li>+3 Recall Sessions</li>
            </ul>
          </div>
          <h1 className="text-5xl mt-10 mb-5"> Mastering</h1>
          <div className="bg-slate-200 p-5 pl-10">
            <h2 className="text-2xl "> Single Master- $40</h2>
            <p className="text-xs mb-3">Deliveries:</p>
            <ul className="list-disc">
              <li>1 Stereo Master</li>
              <li>+1 Recall Session</li>
            </ul>
          </div>
          <div className="bg-slate-300 p-5 pl-10">
            <h2 className="text-2xl "> Album Master- $350</h2>
            <p className="text-xs mb-3">Deliveries:</p>
            <ul className="list-disc">
              <li>10+ Stereo Masters</li>
              <li>+2 Recall Session</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default mixingMastering;
