import Image from "next/image";
import Link from "next/link";
import { perks } from "@/lib/data"

export default function hero() {
  return (
    <>
      <section className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:p-0">
        <div className="max-w-4xl text-start md:text-center md:mx-auto">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            Badge
          </span>
          <h1 className="text-4xl leading-tight lg:leading-[1.25] capitalize tracking-tight lg:text-5xl font-medium">
            Un biased and Un-abashed site for the information you need about the
            Real Estate transaction!
          </h1>
          <p className="mt-4 text-base text-gray-600 lg:mt-6 md:text-lg">
            We understand the importance of being informed. Especially when it
            comes to making the biggest financial decision of your life.
            That&#39;s why we provide you with all the information you need to
            make an informed decision when it comes to real estate transactions.
          </p>
          <div className="flex flex-col justify-start gap-4 mt-4 md:flex-row lg:mt-6 md:justify-center">
            <Link
              href="/#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Action Goes Here
            </Link>
            <Link
              href="/#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Action Goes Here
            </Link>
          </div>
        </div>
        {/* Action Links End */}
        <div className="w-full h-[720px] mt-8 relative">
          <Image fill quality={40} src="/media/hero-image.png" alt="main image" className="object-cover rounded-xl" />
        </div>
        <h2 className="sr-only">Our perks</h2>
        <div className="py-24">
          <div className="grid max-w-2xl grid-cols-1 px-4 mx-auto gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {perks.map((perk) => (
              <div key={perk.name} className="sm:flex">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <div className="relative h-24 w-28">
                      <Image fill quality={40} className="object-cover" src={perk.imageSrc} alt="" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* HERO SECTION ENDS */}
    </>
  );
}
