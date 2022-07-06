import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>JW Music Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center  text-center mt-5">
        <Header />

        {/* Mobile Piano Menu */}
        <div className="mt-6 flex  flex-wrap  mr-auto w-full md:hidden mr-10">
          <div className=" flex flex-col w-full ">
            <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600">
              <Link href="/about">
                <a className=" ">Bio &rarr;</a>
              </Link>
              <div className="h-12 w-1/3 bg-black absolute top-60 left-0"></div>
            </h3>

            <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600">
              <Link href="/about">
                <a className=" ">Listen &rarr;</a>
              </Link>
              <div className="h-12 w-1/3 bg-black absolute top-700 left-0"></div>
            </h3>

            <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600">
              <Link href="/about">
                <a className=" ">Learn to Create &rarr;</a>
              </Link>
              <div className="h-12 w-1/3 bg-black  absolute top-700 left-0"></div>
            </h3>

            <h3 className="text-2xl font-bold rounded-xl border-black  border p-6 text-right hover:text-blue-600 focus:text-blue-600">
              <Link href="/about">
                <a className=" ">Production Services &rarr;</a>
              </Link>
            </h3>

            <h3 className="text-2xl font-bold rounded-xl border-black border p-6 text-right hover:text-blue-600 focus:text-blue-600">
              <Link href="/about">
                <a className=" ">Mixing & Mastering &rarr;</a>
              </Link>
              <div className="h-12 w-1/3 bg-black  absolute top-700 left-0"></div>
            </h3>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
