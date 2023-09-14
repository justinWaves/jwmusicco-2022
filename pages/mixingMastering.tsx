import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function mixingMastering() {
  return (
    <>
      <div className="flex min-h-screen flex-col  bg-slate-100 relative">
        <div className="pb-32">
        <PageHeader />
        <div className=" space-y-2 mx-auto mb-10 max-w-5xl">
          <div className="relative text-center grid place-items-center ">
            <h1 className="text-4xl md:text-5xl text-white absolute shadow-lg">
              Mixing & Mastering Services
            </h1>
            <img src="ssl-9000.jpg" alt="" />
          </div>
   <div className="p-3
   ">
          <h1 className="text-5xl mt-10 mb-5">Mixing</h1>
          <div className="bg-slate-300 p-5 pl-10">
            <h2 className="text-2xl ">Stem Mixes (8 tracks maximum)- $250</h2>
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
              <li>10 Stereo Masters (+ $35 for additional tracks)</li>
              <li>+2 Recall Session</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default mixingMastering;
