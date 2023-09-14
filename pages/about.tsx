import React from "react";
import PageHeader from "../components/page_header";
import Link from "next/link";
import Footer from "../components/footer";
import InstagramIcon from "@mui/icons-material/Instagram";

function about() {
  return (
    <>
      <div className="min-h-screen relative  bg-slate-100">
<PageHeader />
<div className="pb-32">
        <img src="/wavy-grass.jpg" alt="" className="max-w-5xl mx-auto w-full" />
        <div className="max-w-5xl p-3 mx-auto grid place-items-center mb-10">

        <h1 className="text-2xl font-bold mt-10">
          Get to know Justin Weisberg
        </h1>
        <p className="mx-5 mt-5 max-w-2xl">
          JW Music company is more than just a music production powerhouse, from
          commissioned works for advertising, to RnB Records, to Dance Club
          bangers, company founder Justin Weisberg has done it all over the span
          of 20 years, and it shows. Justin is an accomplished Composer, Artist,
          Mix Engineer, Mastering Engineer, and multi-instrumentalist. The man
          eats breathes and sleeps music, and has developed a lightning-fast
          workflow that few possess.
        </p>
        <hr />
        <div className="mt-10 mb-10 bg-slate-500 p-5 w-2/3 max-w-5xl rounded-xl">
          <span className=" text-slate-200 mt-5">
            "Speed in the studio allows more ideas to surface, and having more
            ideas allows you to choose the best ones for the project" -Justin
            Weisberg
          </span>
        </div>
        <p className="mx-5 max-w-2xl">
          Justin was formally trained in both Music and Recording Arts, at West
          Valley College in Saratoga, completing a certificate program before
          signing his first record in 2009 and pursing music full time. Although
          trained using Logic, Justin has been using Ableton Live for the past 7
          years and is an absolute expert with the software. Aside from creating
          music for clients, Justin performs and releases records under the
          moniker:
          <a
            href="http://www.justinwaves.com"
            className="text-slate-400 underline"
            target="_blank"
          >
            Justin Waves.
          </a>
        </p>
      
        <a href="https://www.instagram.com/justinwaves/">
          <InstagramIcon className="text-7xl mt-5" />
        </a>
        <h2 className="text-sm">Follow Justin Waves on Instagram</h2>
        </div>

      <Footer />
      </div>
      </div>
    </>
  );
}

export default about;
