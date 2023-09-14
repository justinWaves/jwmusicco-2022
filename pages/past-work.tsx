import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function demoReel() {
  return (
    <div className="flex min-h-screen flex-col relative bg-slate-100 ">
      <PageHeader />
   
     
      <div className="pb-32">
        
      <div className=" max-w-5xl mx-auto ">
      <div className="relative text-center grid place-items-center ">
            <h1 className="text-4xl md:text-5xl text-white absolute shadow-lg">
              Works by JW Music Co
            </h1>
            <img src="ssl-9000.jpg" alt="" />
          </div>
        <iframe
        className="mt-5"
          width="100%"
          height="450"
          scrolling="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/678806940&color=%230000ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default demoReel;
