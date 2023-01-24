import Head from "next/head";
import Link from "next/link";

export default function Listings() {
  return (
    <>
      <Head>
        <title>Listings - AgentWebb</title>
        <meta name="title" content="Listings - AgentWebb" />
        <meta
          name="description"
          content="Get unbiased and honest information about the real estate buying and selling process. Learn from 25+ years of experience and be ready for any red flags."
        />
      </Head>
      <main className="my-16 space-y-16">
        <section className="wrapper">
          <h1 className="display-small">Listings</h1>
          <p className="mb-4 prose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus magnam inventore eum accusamus aut dicta! Sequi cupiditate laudantium, nemo, quisquam, libero ut temporibus voluptate eaque laboriosam eligendi perferendis aliquam quas.</p>
          <Link href="/listings/slug" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Slug Items</Link>
        </section>
      </main>
    </>
  );
}
