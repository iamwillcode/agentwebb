import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import { decidingToBuy, decidingToSell } from "@/lib/data";

export default function ProgramSlug() {
  return (
    <>
      <Head>
        <title>Program</title>
      </Head>
      <Header />
      <main className="py-32">
        <div className="container flex flex-col gap-16 mx-auto lg:flex-row">
          <div className="w-full space-y-4 lg:w-2/4">
            <TableOfContents programs={decidingToBuy} />
            <TableOfContents programs={decidingToSell} />
          </div>
          <div className="col-span-3">
            <ContentCentered />
          </div>
        </div>
      </main>
      <CallToAction Headline="Ready to take the next step in your home buying journey?!" Supporting="Contact us today to speak with one of our experienced real estate professionals and get started on finding your dream home." />
      <Footer />
    </>
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
              more space for your growing family? Or maybe you&#39;re tired of
              renting and want to build equity in a property that&#39;s truly yours.
              Whatever your reasons, make sure they&#39;re sound and not driven by
              impulse or peer pressure.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Do you presently own a home or are you a new home buyer?
            </h2>
            <p>
              If you&#39;re a new home buyer, congratulations! This information is
              especially important for you to consider
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Is your financial house in order?
            </h2>
            <p>
              Buying a home is a big investment, and you want to make sure
              you&#39;re financially prepared for it. Ideally, you should have at
              least 10% of the purchase price saved for a down payment, as well
              as enough money to cover closing costs, moving expenses, and any
              unexpected repairs that may come up. Be sure to also consider your
              ongoing expenses, such as mortgage payments, property taxes, and
              utilities
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              There&#39;s a big initial investment involved.
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
              Taking on a mortgage is a big responsibility, and you&#39;ll want to
              make sure you can comfortably afford your monthly payments.
              Consider your income, expenses, and other debts to determine if
              you&#39;re ready to take on a mortgage.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              How&#39;s your credit rating?
            </h2>
            <p>
              Your credit score will play a big role in determining whether you
              qualify for a mortgage and what interest rate you&#39;ll receive. If
              your credit score is low, work on improving it before applying for
              a mortgage.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Are you better off renting?
            </h2>
            <p>
              Owning a home can be a great investment, but it&#39;s not for
              everyone. Consider your lifestyle and future plans to determine if
              renting or owning makes more sense for you.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Will you be sticking around for a while?
            </h2>
            <p>
              Buying a home is a long-term commitment, and you&#39;ll want to make
              sure you plan to stay put for at least a few years. Otherwise, you
              may not recoup your initial investment in the form of home equity.
            </p>
          </li>
          <li className="space-y-1">
            <h2>
              Buying decreases ease of mobility?
            </h2>
            <p>
              Once you own a home, it&#39;s harder to pick up and move whenever you
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
              What&#39;s happening in your market?
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

