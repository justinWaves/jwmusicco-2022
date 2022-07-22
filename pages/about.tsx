import React from "react";
import PageHeader from "../components/page_header";
import Link from "next/link";
import Footer from "../components/footer";

function about() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-begin bg-slate-100">
      <Link href="/">
        <a>
          <PageHeader />
        </a>
      </Link>

      <h1 className="text-2xl font-bold mt-10">About </h1>
      <p className="mx-5 mt-5 max-w-2xl">
        JW Music company is more than just a music production powerhouse, from
        commissioned works for advertising, to Rnb Records, to Dance CLub
        bangers, company founder Justin Weisberg has done it all over the span
        of 20 years, and it shows. Justin is an accomplished Composer, Artist,
        Mix Engineer, Mastering Engineer, as well as a Guitarist, Piansit,
        Percussionist and Trumpeter. The man eats breathes and sleeps music, and
        produces faster than most. "Speed in the studio allows more ideas to
        surface, and having more ideas allows you to choose the best ones for
        the project" -Justin Weisberg Aside from creating music for clients,
        Justin is a skilled and patient teacher, with several you tube videos
        out centered on music production, and courses coming soon. Also
        available for 1 on 1 music lessons
      </p>
      <Footer />
    </div>
  );
}

export default about;
