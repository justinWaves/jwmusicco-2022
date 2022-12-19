import React from "react";
import PageHeader from "../components/page_header";
import Footer from "../components/footer";

function demoReel() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-begin bg-slate-100 ">
      <PageHeader />
      <div className="mt-10 ">
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/678806940&color=%230000ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default demoReel;
