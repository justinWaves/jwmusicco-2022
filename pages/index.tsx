import type { NextPage } from "next";
import Head from "next/head";
import PianoMenuMobile from "../components/PianoMenuMobile";
import Footer from "../components/footer";
import Image from "next/image";
import jwlogo from "../public/white-jwmc.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex  flex-col items-center justify-center overflow-hidden h-screen bg-[url('../public/ssl-9000.jpg')] bg-cover">
        <Head>
          <title>JW Music Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=" ">
          <Parallax pages={2} style={{ top: "0", left: "0" }}>
            <ParallaxLayer
              offset={0}
              speed={2.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="   z-4 w-60 ">
                <Image
                  src={jwlogo}
                  alt="jwmc logo"
                  className=" cursor-pointer object-contain z-10 "
                ></Image>
              </div>
              <h1 className="absolute bottom-10 mx-auto text-5xl text-white animate-bounce">
                ⇓
              </h1>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2}></ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <PianoMenuMobile />
            </ParallaxLayer>
          </Parallax>
        </main>
      </div>
    </>
  );
};

export default Home;
