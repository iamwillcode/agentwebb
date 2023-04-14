import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import {
  HiOutlineSearch,
  HiOutlineFire,
  HiOutlineDeviceTablet,
} from "react-icons/hi";
import Image from "next/image";

const items = [
  { id: 1, headline: "Feature 01" },
  { id: 2, headline: "Feature 02" },
  { id: 3, headline: "Feature 03" },
  // More items...
];

export default function index() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
        <meta name="title" content="AgentWebb" />
        <meta name="description" content="Offer unbiased insights into the real estate transactions, to help you, understand, identify potential red flags to help you make informed decisions." />
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
                      Unbiased and comprehensive information about the real
                      estate transaction process. The site provides factual
                      details about buying and selling property and aims to
                      prepare visitors to be one step ahead in the process,
                      alert to any potential red flags.
                    </p>
                    <div className="flex items-center mt-10 gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-slate-600 px-3.5 py-2.5 body-small uppercase tracking-wide text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                      >
                        View Documentation
                      </a>
                      <a
                        href="#"
                        className="tracking-wide uppercase text-slate-900 body-small"
                      >
                        Get In Touch With An Agent{" "}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-10 aspect-[6/5] w-full max-w-lg  object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 relative">
                    <Image
                      fill
                      quality={40}
                      src="/media/hero.webp"
                      alt="placehodler iamge"
                      className="object-cover object-center rounded-2xl"
                    />
                  </div>
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
                <h2 className="mb-3 capitalize title-large">
                  Real Estate Made Simple
                </h2>
                <p className="body-medium">
                  Don&#39;t let the complexities of buying and selling property
                  overwhelm you. With our unbiased and comprehensive real estate
                  resource, you&#39;ll have all the information you need to
                  navigate the process..
                </p>
              </div>
              <div>
                <HiOutlineFire className="w-8 h-8 mb-4" />
                <h2 className="mb-3 capitalize title-large">
                  Get Ahead of the Game!
                </h2>
                <p className="body-medium">
                  Stay informed and one step ahead of the competition with our
                  expert advice and insider tips. We&#39;ll equip you with
                  everything you need to make informed decisions and avoid
                  common pitfalls{" "}
                </p>
              </div>
              <div>
                <HiOutlineDeviceTablet className="w-8 h-8 mb-4" />
                <h2 className="mb-3 capitalize title-large">
                  Power Available On Finger Tips
                </h2>
                <p className="body-medium">
                  Our comprehensive and unbiased resource provides all the facts
                  you need to know before you start. With our expert guidance,
                  you&#39;ll be equipped to make informed decisions and achieve
                  a successful transaction.
                </p>
              </div>
            </div>
          </section>
          {/* SECTION END: 02 :: FEATURES  */}
          <section className="wrapper rounded-3xl">
            <div className="bg-slate-700 rounded-3xl">
              <div className="px-6 py-24 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h3>
                  <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-slate-200">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.
                  </p>
                  <div className="flex items-center justify-center mt-10 gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION END: 03 :: CALL TO ACTION  */}
          <section className="wrapper">
            <ul role="list" className="grid w-full grid-cols-3 gap-3">
              {items.map((item) => (
                <li key={item.id} className="px-2 py-2 overflow-hidden border-b sm:rounded-md sm:px-6">
                  <h4 className="title-medium">{item.headline}</h4>
                  <p className="body-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure totam eius aliquid reiciendis!</p>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-24 mt-4">
              <div className="w-[720px] mt-3 bg-gray-200 h-[500px] relative rounded-3xl">
                <Image fill quality={40} src="/dummy-image.png" alt="placeholder-image" />
              </div>
              <div className=" max-w-prose">
                <h4 className="headline-small">Feature 01</h4>
                <p className="body-large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi pariatur dicta, minus quam et cum sed libero fuga. Rerum, ullam.</p>

              </div>
            </div>
          </section>
          {/* SECTION END: 04 :: CALL TO ACTION  */}
          <section className="wrapper">
            <div className="py-16 bg-slate-700 sm:py-24 lg:py-32 rounded-3xl">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
                  <h5 className="inline sm:block lg:inline xl:block">Want product news and updates?</h5>{' '}
                  <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
                </div>
                <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                  <div className="flex gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    We care about your data. Read our{' '}
                    <a href="#" className="font-semibold text-white hover:text-slate-50">
                      privacy&nbsp;policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </section>
          {/* SECTION END: 04 :: CALL TO ACTION 2  */}
          <section className="wrapper">
            <div className="mb-8 space-y-1.5">
              <h6 className="headline-medium">Stay Up To Date With The Realestate Transation News</h6>
              <p className="body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quae natus dolores laborum adipisci nulla sit dignissimos quos unde?</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <BlogCard title="Real Estate Made Simple" body="Don't let the complexities of buying and selling property overwhelm you. With our unbiased and comprehensive real estate resource, you'll have all the information you need to navigate the process.." linkName="View Article" link="/blog/project-slug" />
              <BlogCard title="Real Estate Made Simple" body="Don't let the complexities of buying and selling property overwhelm you. With our unbiased and comprehensive real estate resource, you'll have all the information you need to navigate the process.." linkName="View Article" link="/blog/project-slug" />
              <BlogCard title="Real Estate Made Simple" body="Don't let the complexities of buying and selling property overwhelm you. With our unbiased and comprehensive real estate resource, you'll have all the information you need to navigate the process.." linkName="View Article" link="/blog/project-slug" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
