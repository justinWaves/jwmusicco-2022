import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function productionService() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-begin bg-slate-100">
        <PageHeader />
        <div className="w-5/6 md:w-1/2 space-y-2">
          <div className="relative text-center flex justify-center ">
            <h1 className="text-4xl md:text-5xl text-slate-900 absolute p-20 lg:top-10 xl:top-20 2xl:top-32 ">
              Music Production & Composition Services
            </h1>
            <img src="ableton.png" alt="" />
          </div>
          <h1 className="text-5xl mt-10 mb-5">Ghost Production</h1>
          <div className="bg-slate-300 p-5 pl-10">
            <h2 className="text-3xl  ">Rates Per Song</h2>
            <table className="table-fixed mt-5 ">
              <thead>
                <tr>
                  <th>Producer Fee</th>
                  <th>Royalty Split</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$250</td>
                  <td>
                    100% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr>
                  <td>$500</td>
                  <td>
                    {" "}
                    75% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr>
                  <td>$1000</td>
                  <td>
                    50% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr>
                  <td>$3000</td>
                  <td>
                    25% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
                <tr>
                  <td>$5000</td>
                  <td>
                    5% Mechanical Royalties <br /> 50% Publishing Royalties
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-10">Deliveries:</p>

            <ul className="list-disc">
              <li>1 Master Recording</li>
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
      <Footer />
    </>
  );
}

export default productionService;
