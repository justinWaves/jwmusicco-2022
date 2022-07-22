import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function productionService() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-begin bg-slate-100">
        <PageHeader />
        <h1>Production Services</h1>
      </div>
      <Footer />
    </>
  );
}

export default productionService;
