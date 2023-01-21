import Head from "next/head";
import Hero from "../components/home/hero";
import Stats from "../components/home/Stats";
import Core_Features from "../components/home/Core_Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
        <meta name="title" content="AgentWebb" />
        <meta name="description" content="AgentWebb provides a detailed overview of the entire real estate transaction process, from finding a property to closing the deal. With our comprehensive resources, you can be sure to find the answers to all your real estate questions." />
      </Head>
      <main className="space-y-16">
        <Hero />
        <Stats />
        <Core_Features/>
        <section className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:p-0">
          <h5 className="text-3xl font-bold">Headline 5</h5>
        </section>
        {/*  SECTION ENDS */}
        <section className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:p-0">
          <h6 className="text-3xl font-bold">Headline 6</h6>
        </section>
        {/* SECTION ENDS */}
      </main>
    </>
  );
}

