import type { NextPage } from "next";
import Head from "next/head";
import PianoMenuMobile from "../components/PianoMenuMobile";
import Footer from "../components/footer";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>JW Music Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center text-center bg-slate-100 ">
          <Header />
          <PianoMenuMobile />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
