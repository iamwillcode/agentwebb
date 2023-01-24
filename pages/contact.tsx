import Head from "next/head";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact - AgentWebb</title>
      </Head>
      <main className="my-24 space-y-24">
        <section className="wrapper">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="">
              <h1 className="capitalize display-small">Contact Information</h1>
            </div>
            <div className="w-full bg-gray-200 h-[500px] rounded-xl"></div>
          </div>
        </section>
        <section className="wrapper">
          <h2 className="capitalize display-small">Office Location</h2>
        </section>
        <section className="wrapper">
          <h3 className="capitalize display-small">Office Location</h3>
        </section>
        <section className="wrapper">
          <h4 className="capitalize display-small">Frequently asked questions</h4>
          <p className="prose">Can&#39;t find the answer you&#39;re looking for? Reach out to our customer support team.</p>
        </section>
        <section className="wrapper">
          <h5 className="capitalize display-small">Office Location</h5>
          <p className="mt-2 prose">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
          <div className="">
            <div className="">
              <h5 className="headline-small">Toronto</h5>
              <p className="prose">7363 Cynthia Pass</p>
              <p className="prose">Toronto, ON N3Y 4H8</p>
            </div>
          </div>
        </section>
        <section className="wrapper">
          <h6 className="capitalize display-small">Your feedback helps us to improve. Thank you for sharing.</h6>
        </section>
      </main>
    </>
  )
}
