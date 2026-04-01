import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function mixingMastering() {
  return (
    <>
      <div className="flex min-h-screen flex-col  bg-gradient-to-t from-slate-800 to-teal-50 relative">
        <div className="pb-64">
          <PageHeader />
          <div className=" space-y-2 mx-auto mb-10 max-w-5xl">
            <div className="relative text-center grid place-items-center ">
              <h1 className="text-4xl md:text-5xl text-white font-thin bg-slate-100 backdrop-blur-lg bg-opacity-30 p-2 md:p-5 rounded-lg absolute shadow-lg">
                Mixing & Mastering Services
              </h1>
              <img src="ssl-9000.jpg" alt="" className="md:rounded-lg shadow-lg"/>
            </div>
            <div
              className="
   "
            >
              <h1 className=" text-5xl md:text-6xl mt-20 mb-3 font-thin text-slate-800 text-center ">
                Mixing
              </h1>
              <div className="md:rounded-lg shadow-lg overflow-hidden">
              <div className="bg-slate-300 p-5 pl-10">
                <h2 className="text-2xl mb-3 font-light">
                  Stem Mixes (8 tracks maximum)- <span className="font-thin">$250</span>
                </h2>
                <p className="text-xs">Deliveries:</p>

                <ul className="list-disc ml-5">
                  <li>Main pre-master</li>
                  <li>Acapella (If applicable)</li>
                  <li>+1 Recall Session</li>
                </ul>
              </div>
              <div className="bg-slate-200 p-5 pl-10">
                <h2 className="text-2xl mb-3 font-light">
                  Full Mixes (20 tracks maximum)- <span className="font-thin">$300</span>
                </h2>
                <p className="text-xs">Deliveries:</p>

                <ul className="list-disc ml-5">
                  <li>Main pre-master</li>
                  <li>Instrumental pre-master (If applicable)</li>
                  <li>Acapella (If applicable)</li>
                  <li>Mix Multitrack</li>
                  <li>+2 Recall Sessions</li>
                </ul>
              </div>
              <div className="bg-slate-300 p-5 pl-10">
                <h2 className="text-2xl mb-3 font-light">Full Mixes (20+ tracks)- <span className="font-thin">$400</span></h2>
                <p className="text-xs">Deliveries:</p>

                <ul className="list-disc ml-5">
                  <li>Main pre-master</li>
                  <li>Instrumental pre-master (If applicable)</li>
                  <li>Acapella (If applicable)</li>
                  <li>Mix Multitrack</li>
                  <li>+3 Recall Sessions</li>
                </ul>
              </div>
              </div>
              <h1 className="text-5xl md:text-6xl mt-20 mb-3 font-thin text-slate-200 text-center">
                Mastering
              </h1>
              <div className="md:rounded-lg shadow-lg overflow-hidden">
              <div className="bg-slate-200 p-5 pl-10">
                <h2 className="text-2xl mb-3 font-light"> Single Master- <span className="font-thin">$40</span></h2>
                <p className="text-xs">Deliveries:</p>
                <ul className="list-disc ml-5">
                  <li>1 Stereo Master</li>
                  <li>+1 Recall Session</li>
                </ul>
              </div>
              <div className="bg-slate-300 p-5 pl-10">
                <h2 className="text-2xl mb-3 font-light"> Album Master- <span className="font-thin">$350</span></h2>
                <p className="text-xs">Deliveries:</p>
                <ul className="list-disc ml-5">
                  <li>10 Stereo Masters (+ $35 for additional tracks)</li>
                  <li>+2 Recall Session</li>
                </ul>
              </div>
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
