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
      <main className="my-16 space-y-16">
        <section className="wrapper">
          <h1 className="capitalize display-medium">
            successful real estate professional with over 25 years Experience
          </h1>
          <p className="max-w-4xl mt-5 body-large">
            Doug is a successful real estate professional with over 25 years of
            experience. He started his career in residential investment real
            estate in 1986. In 1997, he transitioned to full-time real estate
            sales with RE/MAX. To better serve his clients, Doug later joined
            Right At Home Realty. He takes great pride in the business he has
            built through the referrals of satisfied clients and the positive
            feedback he receives through their letters and thank-you cards.
          </p>
        </section>
        <section className="wrapper">
          <h2 className="display-small">About Douglas John Webb</h2>
        </section>
        <section className="wrapper">
          <h3 className="display-small">About Right & Home Realty</h3>
          <p className="max-w-4xl mt-4 mb-6 body-large">
            Right At Home Realty Inc. is a real estate brokerage founded in
            2004. It has been named the #1 Real Estate Brokerage in the GTA for
            2013, 2014 and 2015. It is also Canada&#39;s largest independently
            owned real estate brokerage, with over 3,400 REALTORS® serving the
            GTA. The company has 6 modern and high-tech offices located in
            Toronto, Mississauga, Richmond Hill, Vaughan, Durham, and
            Burlington.
          </p>
          <p className="max-w-4xl mt-4 mb-6 body-large">
            Right At Home Realty Inc. is a member of the Toronto Real Estate
            Board (TREB), the Oakville Milton Real Estate Board (OMREB); the
            REALTORS® Association of Hamilton-Burlington (RAHB) the Durham
            Region Association of REALTORS® (DRAR); the Northhumberland Hills
            Association of REALTORS® (NHAB); and the Brampton Real Estate Board
            (BREB).
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
        </section>
      </main>
    </>
  );
}
