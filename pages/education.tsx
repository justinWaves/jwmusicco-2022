import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";
import { InlineWidget } from "react-calendly";

function education() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-begin">
        <PageHeader />

        <h1 className="mt-10 text-4xl"> Schedule 1 on 1 lessons</h1>
        <div className=" mt-5 w-screen">
          <InlineWidget
            url="https://calendly.com/jwmusicco/1hour"
            styles={{
              height: "800px",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default education;
