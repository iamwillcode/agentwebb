import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramSlug() {
  return (
    <>
      <Head>
        <title>Program</title>
      </Head>
      <Header />
      <main className="py-32">
        <div className="container grid gap-8 p-4 mx-auto lg:grid-cols-4">
          <div className="grid-cols-1 space-y-4">
            <TableOfContents programs={decidingToBuy} />
            <TableOfContents programs={decidingToSell} />
          </div>
          <div className="col-span-3">
            <ContentCentered />
          </div>
        </div>
      </main>
      <SignUpToProgram />
      <Footer />
    </>
  );
}

type Program = {
  id: number;
  title: string;
};

type TableOfContentsProps = {
  programs: Program[];
};
const decidingToBuy = [
  { id: 1, title: "Deciding To Buy" },
  { id: 2, title: "Sell Before You Buy" },
  { id: 3, title: "How Much Can you afford" },
  { id: 4, title: "Sellecting an agent" },
  { id: 5, title: "Buyers RE. Contract" },
  { id: 6, title: "Searching Properties" },
  { id: 7, title: "Visiting Properties" },
  { id: 8, title: "making The Offer Firm" },
  { id: 9, title: "Lawyers and closing" },
  { id: 9, title: "Packing & Moving" },
];
const decidingToSell = [
  { id: 1, title: "Deciding To Sell" },
  { id: 2, title: "Researching Value" },
  { id: 3, title: "Staging Your Property" },
  { id: 4, title: "Sellecting an agent" },
  { id: 5, title: "Sellers RE. Contract" },
  { id: 6, title: "Repairs & Renos" },
  { id: 7, title: "Staging" },
  { id: 8, title: "Showing" },
  { id: 9, title: "Negotiating" },
  { id: 9, title: "Firming The Offer" },
  { id: 9, title: "Lawyers and Closing deals" },
  { id: 9, title: "Packing & Moving" },
];

function TableOfContents({ programs }: TableOfContentsProps) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <section className="w-full p-4 bg-gray-100 rounded ">
      <div className="flex flex-col gap-2 lg:flex-col lg:items-start lg:ml-4">
        <button className="text-gray-700 title-medium " onClick={toggleList}>
          Table Of Contents
          <span className="ml-2 lg:hidden">{showList ? "▲" : "▼"}</span>
        </button>
        <div className="flex flex-col items-start space-y-2 lg:items-stretch lg:flex-row lg:space-y-0 lg:w-auto">
          <ul
            role="list"
            aria-label="Table of Contents"
            className={`${
              showList ? "block" : "hidden"
            } lg:block flex flex-col items-start space-y-2`}
          >
            {programs.map((program) => (
              <li
                key={program.id}
                className="w-full p-2 prose text-gray-900 hover:bg-gray-200/30 hover:cursor-pointer active:opacity-80"
              >
                {program.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// A Link
function ContentCentered() {
  return (
    <div className="my-8 prose max-w-max lg:my-0 ">
      <div className="space-y-4 text-base leading-7 text-gray-700">
        <p className="">
          Buying
        </p>
        <h1>
          Deciding To Buy
        </h1>
        <p>
          Are you a homebuyer? Congratulations! Buying a home is an exciting
          step, but it can also feel overwhelming. To help you make a wise
          decision, here are some key factors to consider before making an
          offer.
        </p>
        <figure className="space-y-6">
          <div className="relative w-full h-96 aspect-video">
            <Image
              fill
              quality={70}
              className="object-cover object-center rounded-xl bg-gray-50"
              src="/media/deciding-to-buy.webp"
              alt=""
            />
          </div>
          <figcaption className="text-gray-500 body-medium gap-x-2">
            Stock Image Of Someone Opening Their New Home.
          </figcaption>
        </figure>
        <ul className="space-y-6">
          <li className="space-y-1">
            <h2>
              Why are you looking to buy?
            </h2>
            <p>
              Think about why you want to buy a home. Is it because you need
              more space for your growing family? Or maybe you're tired of
              renting and want to build equity in a property that's truly yours.
              Whatever your reasons, make sure they're sound and not driven by
              impulse or peer pressure.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Do you presently own a home or are you a new home buyer?
            </h2>
            <p>
              If you're a new home buyer, congratulations! This information is
              especially important for you to consider
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Is your financial house in order?
            </h2>
            <p>
              Buying a home is a big investment, and you want to make sure
              you're financially prepared for it. Ideally, you should have at
              least 10% of the purchase price saved for a down payment, as well
              as enough money to cover closing costs, moving expenses, and any
              unexpected repairs that may come up. Be sure to also consider your
              ongoing expenses, such as mortgage payments, property taxes, and
              utilities
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              There's a big initial investment involved.
            </h2>
            <p>
              Buying a home requires a significant upfront investment, including
              the down payment, closing costs, and other fees. Make sure you
              have enough money saved up to cover these expenses.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Can you handle the debt?
            </h2>
            <p>
              Taking on a mortgage is a big responsibility, and you'll want to
              make sure you can comfortably afford your monthly payments.
              Consider your income, expenses, and other debts to determine if
              you're ready to take on a mortgage.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              How's your credit rating?
            </h2>
            <p>
              Your credit score will play a big role in determining whether you
              qualify for a mortgage and what interest rate you'll receive. If
              your credit score is low, work on improving it before applying for
              a mortgage.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Are you better off renting?
            </h2>
            <p>
              Owning a home can be a great investment, but it's not for
              everyone. Consider your lifestyle and future plans to determine if
              renting or owning makes more sense for you.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Will you be sticking around for a while?
            </h2>
            <p>
              Buying a home is a long-term commitment, and you'll want to make
              sure you plan to stay put for at least a few years. Otherwise, you
              may not recoup your initial investment in the form of home equity.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Buying decreases ease of mobility?
            </h2>
            <p>
              Once you own a home, it's harder to pick up and move whenever you
              want. Consider your future plans and whether owning a home will
              fit in with them.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              What is the cost of ownership?
            </h2>
            <p>
              In addition to mortgage payments, owning a home comes with ongoing
              expenses such as property taxes, utilities, and maintenance. Make
              sure you have a realistic understanding of these costs before
              buying.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              And what are the hidden expenses?
            </h2>
            <p>
              Homeownership also comes with unexpected expenses, such as
              repairs, maintenance, and natural disasters that may not be
              covered by insurance. Make sure you have a plan for handling these
              expenses.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              What's happening in your market?
            </h2>
            <p>
              Finally, make sure you understand the local real estate market and
              whether prices are trending up or down. This can help you make a
              more informed decision about when and where to buy.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
function SignUpToProgram() {
  return (
    <div className="bg-yellow-500/30">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <h2 className="headline-medium">
            "Ready to take the next step in your home buying journey?!
          </h2>
          <p className="max-w-xl mx-auto body-large">
            Contact us today to speak with one of our experienced real estate
            professionals and get started on finding your dream home.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-yellow-600 shadow-sm hover:bg-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            >
              Call Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
