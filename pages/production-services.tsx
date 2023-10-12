import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function productionService() {
  return (
    <>
      <div className="min-h-screen  bg-gradient-to-t from-slate-800 to-teal-50 relative">
        <PageHeader />
        <div className="pb-64">
          <div className="max-w-5xl mx-auto">
            <div className=" space-y-2 mb-10">
              <div className="relative text-center grid place-items-center ">
                <h1 className="text-4xl md:text-5xl font-thin  bg-slate-100 backdrop-blur-lg bg-opacity-30 p-2 md:p-5 rounded-lg text-white
                 absolute">
                  Music Production & Composition Services
                </h1>
                <img src="ableton.png" alt="" className="md:rounded-lg shadow-xl" />
              </div>
              <div className="">
                <h1 className="text-5xl mt-20 mb-10 font-thin text-slate-800 text-center">
                  Ghost Production
                </h1>
                <div className="bg-slate-200 py-10 px-5 pl-10 md:rounded-lg shadow-lg">
                  <h2 className="text-4xl  mb-3 font-thin">
                    Rates Per Song
                    <span className="text-sm ml-3 text-slate-500">
                      (Subject to change)
                    </span>
                  </h2>

                  <p>
                    <span className="font-bold">Producer fees:</span> 50% due up
                    front, remaining 50% due on delivery of premaster. Delivery
                    date to be determined by artist.
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
                          100% Mechanical Royalties <br /> 50% Publishing
                          Royalties
                        </td>
                      </tr>
                      <tr className="bg-slate-200">
                        <td className="text-xl">$500</td>
                        <td>
                          75% Mechanical Royalties <br /> 50% Publishing
                          Royalties
                        </td>
                      </tr>
                      <tr className="bg-slate-300">
                        <td className="text-xl">$1000</td>
                        <td>
                          50% Mechanical Royalties <br /> 50% Publishing
                          Royalties
                        </td>
                      </tr>
                      <tr className="bg-slate-200">
                        <td className="text-xl">$3000</td>
                        <td>
                          25% Mechanical Royalties <br /> 50% Publishing
                          Royalties
                        </td>
                      </tr>
                      <tr className="bg-slate-300">
                        <td className="text-xl">$5000</td>
                        <td>
                          5% Mechanical Royalties <br /> 50% Publishing
                          Royalties
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

                <h1 className="text-5xl mt-20 mb-10 font-thin text-slate-300 text-center">
                  {" "}
                  Composing: Film/ Advert/ Video Games
                </h1>
                <div className="md:rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-slate-200  p-5 pl-10">
                    <h2 className=" text-4xl font-thin "> Advertising</h2>
                    <p className="text-xs mb-3 mt-1  text-slate-500">
                      Pricing dependent on complexity
                    </p>
                    <ul className="list-disc">
                      <li>~$2500 per minute of recorded music</li>
                      <li>Recall Session- $250</li>
                    </ul>
                  </div>
                  <div className="bg-slate-300 p-5 pl-10">
                    <h2 className="text-4xl font-thin">Film/ Video Games</h2>
                    <p className="text-xs mb-3 mt-1 text-slate-500">
                      Pricing dependent on complexity
                    </p>
                    <ul className="list-disc">
                      <li>$300-1000 per minute of recorded music</li>
                      <li>Recall Session- $250</li>
                    </ul>
                  </div>
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
