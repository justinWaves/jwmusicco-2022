import type { NextPage } from "next";
import Head from "next/head";
import PianoMenuMobile from "../components/PianoMenuMobile";
import Footer from "../components/footer";
import Image from "next/image";
import jwlogo from "../public/white-jwmc.png";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>JW Music Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col  items-center text-center ">
          <div className=" hidden md:block top-10 left-10 z-10 absolute">
            <Image
              src={jwlogo}
              alt="jwmc logo"
              className=" cursor-pointer object-contain"
            ></Image>
          </div>
          <PianoMenuMobile />
          <div className="absolute">
            <video
              autoPlay
              loop
              muted
              className=" hidden md:block w-auto max-w-screen top-0 "
            >
              <source src="/Recordplayer.mp4" type="video/mp4" />
            </video>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,181.3C672,160,768,96,864,85.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
