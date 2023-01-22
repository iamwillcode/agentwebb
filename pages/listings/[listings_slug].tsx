import Head from "next/head";

export default function Listings_Slug() {
  return (
    <>
    <Head>
      <title>Listings Slug - AgentWebb</title>
    </Head>
      <main className="my-16">
        <section className="wrapper">
          <h1 className="font-bold display-small">Listings Slug</h1>
          <p className="body-large max-w-[90ch] mt-2 text-lg text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus magnam inventore eum accusamus aut dicta! Sequi cupiditate laudantium, nemo, quisquam, libero ut temporibus voluptate eaque laboriosam eligendi perferendis aliquam quas.</p>
        </section>
        <section className="mt-8 wrapper">
          <div className="w-full bg-gray-500 h-96 rounded-xl"></div>
          <div className="flex w-full gap-4">
          <div className="flex w-full h-20 mt-4 bg-gray-500 rounded-xl place-items-center place-content-center">1</div>
          <div className="flex w-full h-20 mt-4 bg-gray-500 rounded-xl place-items-center place-content-center">2</div>
          <div className="flex w-full h-20 mt-4 bg-gray-500 rounded-xl place-items-center place-content-center">3</div>
          <div className="flex w-full h-20 mt-4 bg-gray-500 rounded-xl place-items-center place-content-center">4</div>
          <div className="flex w-full h-20 mt-4 bg-gray-500 rounded-xl place-items-center place-content-center">5</div>
          <div className="flex w-full h-20 mt-4 bg-gray-500 rounded-xl place-items-center place-content-center">6</div>
          </div>
        </section>
      </main>
    </>
  )
}
