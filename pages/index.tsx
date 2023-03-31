import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HiOutlineHeart, HiOutlineFire, HiOutlineInboxIn } from "react-icons/hi";



export default function index() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
      </Head>
      <Header />
      <main className="my-32 space-y-24 ">
        <section className="wrapper">
          <div className="relative overflow-hidden isolate bg-gradient-to-b from-gray-100/20 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:-mr-80 lg:-mr-96"
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
                      className="rounded-md bg-gray-600 px-3.5 py-2.5 body-small uppercase tracking-wide text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      View Documentation
                    </a>
                    <a href="#" className="tracking-wide text-gray-900 uppercase body-small">
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
        <section className="wrapper">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 ">
            <div>
              <HiOutlineHeart className="w-8 h-8 mb-4" />
              <h3 className="mb-3 capitalize title-large">Unify your payments stack</h3>
              <p className="body-medium">
                Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing.
              </p>
            </div>
            <div>
              <HiOutlineFire className="w-8 h-8 mb-4" />
              <h3 className="mb-3 capitalize title-large">Own your in-store experience</h3>
              <p className="body-medium">
                Provide a seamless customer experience across channels, like reserving online and picking up in store. Our SDKs make it easy to integrate into your own applications to accept
                payments.
              </p>
            </div>
            <div>
              <HiOutlineInboxIn className="w-8 h-8 mb-4" />
              <h3 className="mb-3 capitalize title-large">Grow your platform’s revenue</h3>
              <p className="body-medium">
                Add in-person payments to your platform or marketplace. Using Terminal with Connect, you can onboard users for online and in-person payments, and unify their payouts across channels.
              </p>
            </div>
          </div>
        </section>
        {/* SECTION END: 02 :: FEATURES  */}
        <section className="wrapper">
          <div className="w-full h-auto px-8 py-16 space-y-2 bg-black rounded-xl">
            <h3 className="text-white headline-large">Super Awesome Headline Goes Here!s</h3>
            <p className="max-w-3xl text-white body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </section>
        {/* SECTION END: 03 :: CALL TO ACTION  */}
        <section className="wrapper">
          <div className="w-full h-auto px-8 py-16 space-y-2 bg-black rounded-xl">
            <h4 className="text-white headline-large">Super Awesome Headline Goes Here!s</h4>
            <p className="max-w-3xl text-white body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </section>
        {/* SECTION END: 04 :: CALL TO ACTION 2  */}
      </main>
      <Footer />
    </>
  );
}