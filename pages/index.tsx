import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import jwlogo from "../public/jwmc-logo1.png";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <header>
          <Image src={jwlogo} alt="Picture of the author"></Image>
        </header>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Listen &rarr;</h3>
            <p className="mt-4 text-xl">
              Music composed, produced, mixed and mastered by Justin Waves
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Purchase online courses, or book 1 on 1 training with Justin Waves
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">
              {" "}
              Ghost Production or Custom Music &rarr;
            </h3>
            <p className="mt-4 text-xl">
              Justin Waves will produce any genre desired
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Mixing and Mastering &rarr;</h3>
            <p className="mt-4 text-xl">
              Request Mixing or Mastering Services by Justin Waves
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-2">
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
