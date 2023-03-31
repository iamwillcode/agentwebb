import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HiOutlineSearch, HiOutlineFire, HiOutlineDeviceTablet } from "react-icons/hi";
import Link from "next/link";



export default function index() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
      </Head>
      <Header />
      <main className="bg-slate-50">
        <div className="py-32 space-y-32">
          <section className="wrapper">
            <div className="relative overflow-hidden isolate bg-gradient-to-b from-slate-100/20 pt-14">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-slate-50 shadow-xl shadow-slate-600/10 ring-1 ring-slate-50 sm:-mr-80 lg:-mr-96"
                aria-hidden="true"
              />
              <div className="">
                <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                  <h1 className="max-w-2xl display-medium lg:col-span-2 xl:col-auto">
                    Prepare Yourself For the Real Estate transaction process.
                  </h1>
                  <div className="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
                    <p className="body-large">
                      Unbiased and comprehensive information about the real estate
                      transaction process. The site provides factual details about
                      buying and selling property and aims to prepare visitors to
                      be one step ahead in the process, alert to any potential red
                      flags.
                    </p>
                    <div className="flex items-center mt-10 gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-slate-600 px-3.5 py-2.5 body-small uppercase tracking-wide text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                      >
                        View Documentation
                      </a>
                      <a href="#" className="tracking-wide uppercase text-slate-900 body-small">
                        Get In Touch With An Agent <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                    alt=""
                    className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                  />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-slate-50 sm:h-32" />
            </div>
          </section>
          {/* SECTION END: 01 :: HERO  */}
          <section className="wrapper">
            <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 ">
              <div>
                <HiOutlineSearch className="w-8 h-8 mb-4" />
                <h3 className="mb-3 capitalize title-large">Real Estate Made Simple</h3>
                <p className="body-medium">
                  Don&#39;t let the complexities of buying and selling property overwhelm you. With our unbiased and comprehensive real estate resource, you&#39;ll have all the information you need to navigate the process..
                </p>
              </div>
              <div>
                <HiOutlineFire className="w-8 h-8 mb-4" />
                <h3 className="mb-3 capitalize title-large">Get Ahead of the Game!</h3>
                <p className="body-medium">
                  Stay informed and one step ahead of the competition with our expert advice and insider tips. We&#39;ll equip you with everything you need to make informed decisions and avoid common pitfalls              </p>
              </div>
              <div>
                <HiOutlineDeviceTablet className="w-8 h-8 mb-4" />
                <h3 className="mb-3 capitalize title-large">Power Available On Finger Tips</h3>
                <p className="body-medium">
                  Our comprehensive and unbiased resource provides all the facts you need to know before you start. With our expert guidance, you&#39;ll be equipped to make informed decisions and achieve a successful transaction.
                </p>
              </div>
            </div>
          </section>
          {/* SECTION END: 02 :: FEATURES  */}
          <section className="wrapper">
            <div className="p-12 overflow-hidden bg-slate-700 rounded-3xl ">
              <div className="space-y-4 text-start">
                <h3 className="text-white capitalize headline-large">Start your successful real estate transaction today!</h3>
                <p className="text-slate-300 body-large max-w-prose">Browse our comprehensive resources and gain the knowledge and confidence you need to make informed decisions.</p>
              </div>
              <div className="flex justify-start mt-4">
                <Link
                  href="/docs"
                  className="px-3 py-2 tracking-wide text-white uppercase rounded-md shadow-sm bg-slate-900 body-small hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </section>
          {/* SECTION END: 03 :: CALL TO ACTION  */}
          <section className="wrapper">
            <div className="overflow-hidden bg-black rounded-lg ">
              <div className="px-4 py-5 space-y-1.5 sm:p-6">
                <h3 className="text-white headline-medium">Super Awesome Headline!</h3>
                <p className="max-w-3xl text-white body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </section>
          {/* SECTION END: 04 :: CALL TO ACTION 2  */}
        </div>
      </main>
      <Footer />
    </>
  );
}