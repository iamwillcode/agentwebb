import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
        <meta name="title" content="AgentWebb" />
        <meta
          name="description"
          content="Offer unbiased insights into the real estate transactions, to help you, understand, identify potential red flags to help you make informed decisions."
        />
      </Head>
      {/* End Of Page SEO */}
      <Header />
      <main className="my-32 space-y-32 wrapper">
        <CompanYFeatures />
        <Biography />
      </main>
      <Footer />
    </>
  );
}

const items = [
  { id: 1, info: "Salesperson & Rep." },
  { id: 2, info: "Tel: 905 665-2500" },
  { id: 3, info: "Direct: 416 845-9322" },
  // More items...
];

function Biography() {
  return (
    <>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="">
          <div className="w-full h-[500px] relative">
            <Image
              fill
              quality={40}
              src="/media/agentwebb.webp"
              alt=""
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <ul
            role="list"
            className="flex items-center w-full space-x-4 text-center"
          >
            {items.map((item) => (
              <li
                key={item.id}
                className="w-full p-3 mt-4 overflow-hidden bg-slate-100 sm:rounded-md sm:px-6"
              >
                <span className="body-small">{item.info}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-4 space-y-4 body-large">
          <h1 className="headline-large">Douglas J. Webb</h1>
          <p>
            Doug got involved in residential investment real estate in 1986
            which ultimately led to a full time career in real estate sales in
            1997 with RE/Max. To provide his clients with the latitude of
            service which he and most of his clients sought, Doug moved to Right
            At Home Realty.
          </p>
          <p>
            The business generated through the referral of his satisfied clients
            along with their letters and thank-you cards is something he is very
            proud of.
          </p>
          <p>
            Right At Home Realty Inc. was founded in 2004 and is the #1 Real
            Estate Brokerage in the GTA for 2013, 2014 and 2015* as well as
            Canadas largest independently owned real estate brokerage** with
            over 3,400 REALTORS® serving the GTA. Right at Home Realty offers 6
            modern and high tech offices across the GTA in Toronto, Mississauga,
            Richmond Hill, Vaughan, Durham, and Burlington.
          </p>
          <p>
            Right At Home Realty Inc. is a member of the Toronto Real Estate
            Board (TREB), the Oakville Milton Real Estate Board (OMREB); the
            REALTORS® Association of Hamilton-Burlington (RAHB) the Durham
            Region Association of REALTORS® (DRAR); the Northhumberland Hills
            Association of REALTORS® (NHAB); and the Brampton Real Estate Board
            (BREB).
          </p>
        </div>
      </div>
    </>
  );
}

function CompanYFeatures() {
  return (
    <>
      <section className="px-4 py-24">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="max-w-prose">
            <h2 className="mb-4 font-extrabold leading-snug capitalize headline-large">
              unbiased Information about the Real Estate transaction Broken Down
              In One Place Made For You
            </h2>
            <p className="mb-5 body-large">
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you#&39;re looking for.
            </p>
          </div>
          <div className="relative w-full h-full py-56">
            <Image
              fill
              quality={70}
              src="/media/pexels-energepiccom-313691-unbiased-info.jpg"
              alt="Someone Giving Out Infromation about realestate"
              className="object-cover object-center rounded-2xl"
            />
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2 max-w-prose">
            <h2 className="mb-4 font-extrabold leading-snug capitalize headline-large">
              20+ Years Of Experience In the Realestate Market!
            </h2>
            <p className="mb-5 body-large">
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </p>
          </div>
          <div className="relative w-full h-full py-56">
            <Image
              fill
              quality={70}
              src="/media/pexels-rodnae-productions-8293778-expereince.jpg"
              alt="Someone Giving Out Infromation about realestate"
              className="object-cover object-center rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
