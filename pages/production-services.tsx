import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function productionService() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 relative">
        <PageHeader />
        <div className="pb-32">
          <div className="max-w-5xl mx-auto">
        <div className=" space-y-2 mb-10">
          <div className="relative text-center grid place-items-center ">
            <h1 className="text-4xl md:text-5xl text-slate-900 absolute">
              Music Production & Composition Services
            </h1>
            <img src="ableton.png" alt="" />
          </div>
          <div className="p-3">
          <h1 className="text-5xl mt-15 mb-10">Ghost Production</h1>
          <div className="bg-slate-200 p-5 pl-10">
            <h2 className="text-3xl  mb-3">
              Rates Per Song
              <span className="text-sm ml-3 text-slate-500">
                (Subject to change)
              </span>
            </h2>

            <p>
              Producer fees: 50% due up front, remaining 50% due on delivery of
              premaster. Delivery date to be determined by artist.
            </p>
            <table className="table-auto mt-5 w-full text-center border border-slate-400">
              <thead className="bg-slate-400 text-slate-100 rounded-sm uppercase text-sm ">
                <tr>
                  <th>Producer Fee</th>
                  <th>Royalty Split</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-300">
                  <td className="text-xl">$250</td>
                  <td>
                    100% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr className="bg-slate-200">
                  <td className="text-xl">$500</td>
                  <td>
                    75% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr className="bg-slate-300">
                  <td className="text-xl">$1000</td>
                  <td>
                    50% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr className="bg-slate-200">
                  <td className="text-xl">$3000</td>
                  <td>
                    25% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr className="bg-slate-300">
                  <td className="text-xl">$5000</td>
                  <td>
                    5% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-10">Deliveries:</p>

            <ul className="list-disc">
              <li>1 Pre Master Recording</li>
              <li>1 Master Recording</li>
              <li>Acapella (If applicable)</li>
              <li>+1 Recall Session</li>
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
          <h1 className="text-5xl mt-10 mb-5">
            {" "}
            Composing: Film/ Advert/ Video Games
          </h1>
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
      </div>
      <Footer />
      </div>
    </>
  );
}

export default productionService;
