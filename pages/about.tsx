import React from "react";
import PageHeader from "../components/page_header";
import Link from "next/link";
import Footer from "../components/footer";
import InstagramIcon from "@mui/icons-material/Instagram";

function about() {
  return (
    <>
      <div className="min-h-screen relative   bg-gradient-to-t from-slate-800 to-teal-50">
        <PageHeader />
        <div className="pb-32 grid place-items-center ">
          <img
            src="/wavy-grass.jpg"
            alt=""
            className="max-w-5xl mx-auto w-full md:rounded-lg shadow-lg"
          />
          <div className="max-w-5xl p-3 grid place-items-center mb-10 bg-slate-200 md:rounded-lg  md:m-5 shadow-lg">
            <h1 className="text-5xl font-thin mt-10 text-slate-900 text-center">
              Get to know Justin Weisberg
            </h1>
            <p className="mx-5 mt-5 max-w-2xl indent-8">
              JW Music Company is not just a music production powerhouse; It's a
              creative hub where various musical endeavors and projects come to
              life. With a career spanning over two decades, company founder
              Justin Weisberg has made significant contributions to the music
              industry. Justin is a versatile talent in the music realm,
              excelling as a composer, artist, mix engineer, mastering engineer,
              and a skilled multi-instrumentalist. Music isn't just a profession
              for him; it's his passion, his muse, and his way of life. Over the
              years, he has developed a streamlined workflow that few can match.
            </p>
            <hr />
            <div className="mt-10 mb-10 bg-slate-500 p-5 w-2/3 max-w-5xl rounded-xl shadow-lg">
              <span className=" text-slate-200 mt-5">
                "Speed in the studio allows more ideas to surface, and having
                more ideas allows you to choose the best ones for the project"
                -Justin Weisberg
              </span>
            </div>
            <p className="mx-5 max-w-2xl indent-8">
              Justin's journey began with formal training in both music and
              recording arts at West Valley College in Saratoga, where he
              completed a certificate program. In 2009, he signed his first
              record deal and pursued a full-time music career. While his roots
              are in Logic, Justin has embraced Ableton Live for the past seven
              years, becoming a seasoned expert with the software. In addition
              to creating music for clients, Justin also showcases his talent as
              a performer and releases records under the moniker{" "}
              <a
                href="http://www.justinwaves.com"
                className="text-teal-600 hover:text-teal-400 underline"
                target="_blank"
                rel="noopener"
              >
                Justin Waves
              </a>
              . His dedication to music and unwavering commitment to his craft
              shine through in every note and every beat.
            </p>

            <a
              target="_blank"
              rel="noopener"
              href="https://www.instagram.com/justinwaves/"
              className="grid place-items-center text-teal-600 hover:text-teal-400 transition-all duration-300"
            >
              <InstagramIcon className="text-7xl mt-5" />
              <h2 className="text-sm">
              Follow Justin Waves on Instagram
            </h2>
            </a>
            
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default about;
