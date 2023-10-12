import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";
import { InlineWidget } from "react-calendly";

function education() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative  bg-gradient-to-t from-slate-800 to-teal-50">
      <div className="pb-64">
        <PageHeader />
<div className="max-w-5xl mx-auto">
<div className=" grid place-items-center ">
<h1 className="text-4xl md:text-5xl text-white font-thin bg-slate-100 backdrop-blur-lg bg-opacity-30 p-2 md:p-5 rounded-lg absolute shadow-lg">
              Music Education
            </h1>
            <img src="piano.jpg" alt="" className="md:rounded-lg shadow-lg"/>
          </div>
        <h1 className="mt-20 text-5xl text-center font-thin text-slate-900"> Schedule 1 on 1 lessons</h1>
        <div className="  ">
          <InlineWidget
            url="https://calendly.com/jwmusicco/1hour"
            styles={{
              height: "800px",
            }}
          />
        </div>
        </div>
      <Footer />
      </div>
      </div>
    </>
  );
}

export default education;
