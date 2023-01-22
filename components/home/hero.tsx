import Image from "next/image";
import Link from "next/link";
import { perks } from "@/lib/data";

export default function hero() {
  return (
    <>
      <section className=" bg-primary-50">
        <div className="py-16 wrapper">
          <div className="max-w-4xl text-start md:text-center md:mx-auto">
            <h1 className="display-medium">
              First-time buyer or a seasoned investor? AgentWebb helps you make
              the right decision!
            </h1>
            <p className="mt-6 body-large">
              We are your go-to source for unbiased and un-abashed information
              to help you make the right decision when it comes to the real
              estate transaction. Our experienced professional and expertise
              agent will guide you through the entire process, from finding the
              right property to closing the deal. With our comprehensive set of
              resources, you can get the information you need to make the best
              decisions for your real estate investments. So, don&#39;t wait any
              longer!
            </p>
            <div className="flex flex-col justify-start gap-4 mt-4 md:flex-row lg:mt-6 md:justify-center">
              <Link href="/contact" className="btn-primary">
                Contact AgentWebb
              </Link>
              <Link href="/#" className="btn-outline">
                View The Realestate Process
              </Link>
            </div>
          </div>
          {/* Action Links End */}
          <div className="w-full h-96 lg:h-[720px] mt-8 relative">
            <Image
              fill
              quality={40}
              src="/media/hero-image.png"
              alt="main image"
              className="object-cover rounded-xl"
            />
          </div>
          <h2 className="sr-only">Our perks</h2>
          <div className="py-16">
            <div className="grid max-w-2xl grid-cols-1 px-4 mx-auto gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {perks.map((perk) => (
                <div key={perk.name} className="sm:flex">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="relative h-24 w-28">
                        <Image
                          fill
                          quality={40}
                          className="object-cover"
                          src={perk.imageSrc}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION ENDS */}
    </>
  );
}
