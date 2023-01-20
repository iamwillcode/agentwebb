import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
        <meta name="title" content="AgentWebb" />
        <meta name="description" content="AgentWebb provides a detailed overview of the entire real estate transaction process, from finding a property to closing the deal. With our comprehensive resources, you can be sure to find the answers to all your real estate questions." />
      </Head>
      <main className="space-y-16">
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4 lg:p-0">
          <h1 className="text-3xl font-bold">Headline 1</h1>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4 lg:p-0">
          <h2 className="text-3xl font-bold">Headline 2</h2>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4 lg:p-0">
          <h3 className="text-3xl font-bold">Headline 3</h3>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4 lg:p-0">
          <h4 className="text-3xl font-bold">Headline 4</h4>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4 lg:p-0">
          <h5 className="text-3xl font-bold">Headline 5</h5>
        </section>
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 p-4 lg:p-0">
          <h6 className="text-3xl font-bold">Headline 6</h6>
        </section>
      </main>
    </>
  );
}
