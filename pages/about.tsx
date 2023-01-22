import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function about() {
  return (
    <>
      <Head>
        <title>About - AgentWebb</title>
        <meta name="title" content="About - AgentWebb" />
        <meta
          name="description"
          content="Get unbiased and honest information about the real estate buying and selling process. Learn from 25+ years of experience and be ready for any red flags."
        />
      </Head>
      <main className="">
        <Our_Mission />
        <Agent_Webb />
        <Testimonials />
        <Right_At_Home />
      </main>
    </>
  );
}
function Our_Mission() {
  return (
    <section className="bg-primary-500">
      <div className="py-24 wrapper ">
        <p className="text-white body-large">My Mission</p>
        <h1 className="italic capitalize tracking headline-small text-primary-100">
          provide exceptional service to my clients with honesty and integrity,
          enabling them to make informed decisions and fulfill their real estate
          goals{" "}
        </h1>
      </div>
    </section>
  );
}

function Agent_Webb() {
  return (
    <section className="py-24 wrapper">
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <p className="title-medium">About Douglas John Webb</p>
          <h2 className="mt-2 font-bold capitalize headline-large">
            successful real estate professional with over 25 years Experience
          </h2>
          <p className="mt-4 body-large">
            Douglas John Webb is an experienced real estate professional with
            over 20 years of experience in sales, marketing, property
            management, and development. A graduate of the University of
            California, Berkeley, he excels in the legal, financial, and
            regulatory aspects of real estate transactions. Douglas is dedicated
            to providing his clients with the highest level of service, and
            quickly capitalizes on opportunities to ensure his clients have the
            best experience possible.{" "}
          </p>
        </div>
        <div className="relative w-full h-full py-48 bg-gray-200">
          <Image
            fill
            quality={40}
            src="/media/agent-webb.webp"
            alt=""
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <p className="title-medium">About Douglas John Webb</p>
          <h2 className="mt-2 font-bold capitalize headline-large">
            successful real estate professional with over 25 years Experience
          </h2>
          <p className="mt-4 body-large">
            Douglas John Webb is an experienced real estate professional with
            over 20 years of experience in sales, marketing, property
            management, and development. A graduate of the University of
            California, Berkeley, he excels in the legal, financial, and
            regulatory aspects of real estate transactions. Douglas is dedicated
            to providing his clients with the highest level of service, and
            quickly capitalizes on opportunities to ensure his clients have the
            best experience possible.{" "}
          </p>
        </div>
        <div className="w-full h-full py-48 bg-gray-200"></div>
      </div>
    </section>
  );
}
function Testimonials() {
  return (
    <section className="bg-secondary-50">
      <section className="py-24 wrapper">
        <div className="w-full mx-auto md:w-5/6">
          <div className="text-left md:text-center">
            <p className="mb-8 text-xs font-bold tracking-widest text-purple-800 uppercase">
              Why Companies Love Us
            </p>
            <h1 className="mb-10 font-serif text-xl italic font-thin text-gray-800 md:leading-snug md:text-3xl">
              “We endeavour to build a truly human AND high-performing
              workplace, where everyone can do the best work of their lives.
              This product is a key part of facilitating this culture by being
              our one-stop-shop for all things performance development.”
            </h1>
          </div>
          <div className="flex items-center justify-start md:justify-center">
            <div className="relative w-10 h-10">
              <Image fill quality={40} src="/media/avatar-svgrepo-com.svg" alt="Photo of Praveen Juge" className="rounded-full" />
            </div>
            <div className="ml-4">
              <p className="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase">
                Praveen Juge
              </p>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                CEO, Birds
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
function Right_At_Home() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="py-24 wrapper">
          <h3 className="display-small">
            Be Part of the Biggest Real Estate Network in Canada - Join Right at
            Home Now
          </h3>
          <p className="max-w-4xl mt-4 mb-6 body-large">
            At Right at Home, we remain the largest independent brokerage in
            Canada with 10 offices, 6,000 members and a presence in the GTA,
            Barrie, and Ottawa. We are executing an aggressive growth strategy
            to expand our reach and offer Realtors® an attractive alternative to
            traditional commission split models.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative w-full h-96 rounded-xl">
              <Image
                fill
                quality={40}
                src="/media/right-at-home.webp"
                className="object-cover "
                alt="right at home image"
              />
            </div>
            <div className="relative w-full h-96 rounded-xl">
              <Image
                fill
                quality={40}
                src="/media/right-at-home.webp"
                className="object-cover "
                alt="right at home image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
