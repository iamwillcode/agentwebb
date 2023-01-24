import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FiLayers, FiArrowRight } from "react-icons/fi";
export default function index() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
      </Head>
      <main className="mb-24 space-y-24">
        <section className="">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <Image src="/media/hero-image.png" alt="" fill quality={40} className="object-cover object-center w-full h-screen" />
            </div>
            <div className="relative w-full h-screen bg-gray-900 bg-opacity-75">
              <div className="absolute left-0 right-0 top-52 text-c wrapper">
                <h1 className="max-w-3xl leading-normal tracking-normal text-white display-small">An Unbiased Guide To Help You Take Control of Your Real Estate Transactions for Success.</h1>
                <p className="mt-4 mb-8 prose text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
                <div className="space-x-4">
                  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white align-top bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Button text</button>
                  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 align-top bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" > Button text </button>
                </div>
              </div>
              {/* Content Goes Here */}
            </div>
          </div>
        </section>
        {/* End Of Hero Section */}
        <section className="">
          <div className="wrapper">
            <h2 className="leading-normal tracking-normal display-small">Reach Your Real Estate Goals: Save Money & Maximize Efficiency</h2>
            <p className="max-w-3xl mt-2 prose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
          </div>
          {/* End of Headline For Incentives */}
          <div className="grid grid-cols-1 gap-8 wrapper md:grid-cols-2">
            <div className="p-6 mt-8 border border-gray-700 rounded-xl">
              <FiLayers className="w-6 h-6 mb-4 text-black" />
              <h2 className="font-bold leading-normal tracking-normal title-medium">Reach Your Real Estate Goals and Save Money and Maximize Efficiency</h2>
              <p className="mt-2 prose-sm prose-neutral">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
            </div>
            <div className="p-6 mt-8 border border-gray-700 rounded-xl">
              <FiLayers className="w-6 h-6 mb-4 text-black" />
              <h2 className="font-bold leading-normal tracking-normal title-medium">Reach Your Real Estate Goals and Save Money and Maximize Efficiency</h2>
              <p className="mt-2 prose-sm prose-neutral">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
            </div>
            <div className="p-6 mt-8 border border-gray-700 rounded-xl">
              <FiLayers className="w-6 h-6 mb-4 text-black" />
              <h2 className="font-bold leading-normal tracking-normal title-medium">Reach Your Real Estate Goals and Save Money and Maximize Efficiency</h2>
              <p className="mt-2 prose-sm prose-neutral">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
            </div>
            <div className="p-6 mt-8 border border-gray-700 rounded-xl">
              <FiLayers className="w-6 h-6 mb-4 text-black" />
              <h2 className="font-bold leading-normal tracking-normal title-medium">Reach Your Real Estate Goals and Save Money and Maximize Efficiency</h2>
              <p className="mt-2 prose-sm prose-neutral">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
            </div>
          </div>
        </section>
        {/* End Of Incentives Section */}
        <section className="wrapper">
          <div className="py-16 bg-gray-600 lg:p-24 rounded-xl">
            <h3 className="max-w-3xl leading-normal tracking-normal text-white display-small">Experience Seamless Real Estate Transactions and Get the Most Out of Your Real Estate Experiences</h3>
            <p className="mt-2 prose text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
          </div>

        </section>
        {/* End Of  */}
        <section className="">
          <div className="wrapper">
            <h4 className="leading-normal tracking-normal display-small">Get Comprehensive Real Estate Support to Take the Guesswork Out of Real Estate Transactions</h4>
            <p className="prose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
          </div>
          <div className="grid grid-cols-1 gap-8 wrapper lg:grid-cols-3">
            <div className="p-10 mt-8 bg-gray-700 rounded-xl">
              <h2 className="font-bold leading-normal tracking-normal text-white title-medium">Before We Get Started</h2>
              <p className="mt-2 prose-sm text-gray-200 prose-neutral">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
              <button type="button" className="mt-3 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                Button text  <FiArrowRight className="text-black" />
              </button>
            </div>
            <div className="p-10 mt-8 bg-gray-700 rounded-xl">
              <h2 className="font-bold leading-normal tracking-normal text-white title-medium">Decideing To Buy</h2>
              <p className="mt-2 prose-sm text-gray-200 prose-neutral">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
              <button type="button" className="mt-3 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                Button text  <FiArrowRight className="text-black " />
              </button>
            </div>
            <div className="p-10 mt-8 bg-gray-700 rounded-xl">
              <h2 className="font-bold leading-normal tracking-normal text-white title-medium">Decideing To Sell</h2>
              <p className="mt-2 prose-sm text-gray-200 prose-neutral">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
              <button type="button" className="mt-3 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                Button text  <FiArrowRight className="text-black" />
              </button>
            </div>
          </div>
        </section>
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div>
              <h5 className="max-w-3xl mb-4 leading-normal tracking-normal display-small">Get Access to the Best Real Estate Resources</h5>
              <p className="mb-5 prose">
                Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
              </p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Learn More</a>
            </div>
            <div className="w-full h-full py-48 bg-gray-200 rounded-xl"></div>
          </div>
          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div className="order-none md:order-2">
              <h5 className="max-w-3xl mb-4 leading-normal tracking-normal display-small">Make Your Real Estate Transactions Easier</h5>
              <p className="mb-5 prose">
                Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
                scratch.
              </p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Learn More</a>
            </div>
            <div className="w-full h-full py-48 bg-gray-200 rounded-xl"></div>
          </div>
        </section>
        <section className="wrapper">
          <div className="p-16 bg-gray-900 rounded-xl">
            <h6 className="max-w-2xl leading-normal tracking-normal text-white display-small">Unlock the Potential of Your Real Estate Transactions Today with Agentwebb</h6>
            <p className="mt-2 mb-4 prose text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore officia ipsam ex cupiditate possimus nulla beatae, facilis minus earum sit debitis reiciendis distinctio eaque cum eos! Officia, excepturi sit!</p>
            <Link href="/docs" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 align-top bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >Get Started Today</Link>
          </div>
        </section>
      </main>
    </>
  )
} 