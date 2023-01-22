import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function docs() {
  return (
    <>
      <Head>
        <title>Docs - About Page</title>
      </Head>
      <Breadcrumbs />
      <main className="my-16 wrapper">
        <div className="flex flex-col lg:flex-row">
          <section className="items-start w-full p-4 border h-fit rounded-xl lg:w-1/4">
            <h1 className="font-bold title-medium">Documentation</h1>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="text-gray-500 body-medium hover:text-black hover:cursor-pointer">
                Deciding To Buy
              </li>
              <li className="text-gray-500 body-medium hover:text-black hover:cursor-pointer">
                Deciding To Sell
              </li>
              <li className="text-gray-500 body-medium hover:text-black hover:cursor-pointer">
                Buyers Infromation
              </li>
              <li className="text-gray-500 body-medium hover:text-black hover:cursor-pointer">
                Sellers Infromation
              </li>
              <li className="text-gray-500 body-medium hover:text-black hover:cursor-pointer">
                More Infromation
              </li>
              <li className="text-gray-500 body-medium hover:text-black hover:cursor-pointer">
                Additional Infromation
              </li>
              <li className="text-gray-500 body-medium hover:text-black hover:cursor-pointer">
                FAQ
              </li>
            </ul>
          </section>
          <section className="w-full prose-lg wrapper">
            <h2 className="display-small">
              Things to consider when to buy a home.
            </h2>
            <strong>1. Why are you looking to buy.</strong>
            <p>
              First ask yourself some fundamental questions about why you are
              looking to buy or move and see if you can ferret out any unwise
              motives that lurk at the heart of it. Buying a new home always
              feels a bit scary but you need to separate what is a normal
              conflict of emotions, from actual reasons that would make you
              stumble in the process or regret in the future. Only you know the
              real answers, evaluate your answers and be honest with yourself.
            </p>
            <strong>Examples of good reasons are:</strong>
            <p>
              For a job relocation. A new job or promotion with a solid company
              and bright future. Where your partner&#39;s agrees with the impact
              this move will have on their life as well. Your family has
              outgrown your one bedroom condo and a new child is on the way
              Money is not an issue and you have really thought it through for a
              long time, a year or more, it&#39;s not an impulsive decision.
            </p>
            <strong>Examples of pooor reasons are:</strong>
            <p>
              You were on a drive one day and saw an open house, you went in for
              a visit and you were so impressed it made you just want a change
              in your life. All your friends have much nicer homes and you feel
              so inadequate. You have some rather serious financial issues that
              you should deal with first but you are hoping that it will resolve
              itself over time.
            </p>
            <strong>
              Do you presently own a home or are you a new home buyer.
            </strong>
            <p>
              If you own a home the following thoughts may not be as relevant to
              you. You may have enough equity in your home to contribute to the
              purchase. But read through them, then head on over to:
            </p>
            <strong>Is your financial house in order</strong>
            <p>
              If you’re already struggling to pay your bills, buying a home will
              only compound your money woes. Ideally, yo&&#39;ve saved at least
              10% for a down payment &#45; See Guidlines Here &#45; keep in mind
              you&#39;ll have to pay mortgage insurance depending on your down
              payment, Land transfer tax, and that&#39;s in addition to saving
              for retirement and building an emergency fund. Visit CMHC Are You
              Ready Financially
            </p>
            <Article_Links />
          </section>
        </div>
      </main>
    </>
  );
}

function Article_Links() {
  return (
    <section className="flex justify-between">
      <button
        type="button"
        className="inline-flex items-center rounded border border-transparent px-2.5 py-1.5 body-medium transition-all text-secondary-700 hover:bg-secondary-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
      >
        Previous Page
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded border border-transparent px-2.5 py-1.5 body-medium transition-all text-secondary-700 hover:bg-secondary-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
      >
        Next Page
      </button>
    </section>
  );
}

import { HiHome } from "react-icons/hi";

const pages = [
  { name: "Docs", href: "/docs", current: false },
  { name: "Deciding To Buy", href: "/docs/slug", current: true },
];

function Breadcrumbs() {
  return (
    <nav
      className="flex bg-white border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="flex w-full max-w-screen-xl px-4 mx-auto space-x-4 sm:px-6 lg:px-8"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HiHome className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
