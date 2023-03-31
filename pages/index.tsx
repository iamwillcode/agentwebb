import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export default function index() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
      </Head>
      <Header />
      <main className="">
        <section>
          <div className="relative overflow-hidden isolate bg-gradient-to-b from-gray-100/20 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:-mr-80 lg:-mr-96"
              aria-hidden="true"
            />
            <div className="px-6 py-32 mx-auto max-w-7xl sm:py-40 lg:px-8">
              <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 className="max-w-2xl text-4xl font-bold tracking-normal text-gray-900 capitalize sm:text-6xl lg:col-span-2 xl:col-auto">
                  Prepare Yourself For the Real Estate transaction process.
                </h1>
                <div className="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-lg leading-8 text-gray-600">
                    Unbiased and comprehensive information about the real estate
                    transaction process. The site provides factual details about
                    buying and selling property and aims to prepare visitors to
                    be one step ahead in the process, alert to any potential red
                    flags.
                  </p>
                  <div className="flex items-center mt-10 gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      View Documentation
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
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
            <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </section>
        {/* SECTION END: 01 :: HERO  */}
      </main>
      <Footer />
    </>
  );
}