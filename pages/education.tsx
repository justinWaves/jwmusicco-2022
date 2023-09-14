import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";
import { InlineWidget } from "react-calendly";

function education() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative bg-slate-100">
        <div className="pb-32">
        <PageHeader />
<div className="max-w-5xl mx-auto">
<div className=" grid place-items-center ">
            <h1 className="text-4xl md:text-5xl text-white absolute  ">
              Music Education
            </h1>
            <img src="piano.jpg" alt="" />
          </div>
        <h1 className="mt-10 text-4xl text-center"> Schedule 1 on 1 lessons</h1>
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
