import Head from "next/head";

export default function docs() {
  return (
    <>
      <Head>
        <title>Docs - AgentWebb</title>
        <meta name="title" content="Docs - AgentWebb" />
        <meta
          name="description"
          content="Get unbiased and honest information about the real estate buying and selling process. Learn from 25+ years of experience and be ready for any red flags."
        />
      </Head>
      <main className="flex-1 my-16">
          <div className="p-6 wrapper">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="flex items-center w-full gap-4 mt-4">
              <div className="w-1/5 border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
              <div className="w-full border-4 border-gray-200 border-dashed rounded-lg max-w-[75ch] space-y-8">
                <p className="body-large">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  neque eaque veritatis et distinctio, tempore ut enim
                  praesentium blanditiis perspiciatis facilis modi est
                  repudiandae quia at a sapiente. Cumque, quis.
                </p>
                <p className="body-large">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  omnis assumenda doloribus hic molestias ipsa doloremque sint
                  veritatis consequuntur nostrum soluta esse non, sapiente
                  explicabo, maiores eveniet dolorum modi. Dolore. Ipsam itaque
                  natus at velit porro veritatis, ut, sapiente obcaecati qui
                  expedita saepe laborum dicta impedit rerum dolorem explicabo,
                  temporibus neque cumque ratione sed eaque. Placeat tempore
                  fuga nostrum culpa!
                </p>
                <p className="body-large">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  neque eaque veritatis et distinctio, tempore ut enim
                  praesentium blanditiis perspiciatis facilis modi est
                  repudiandae quia at a sapiente. Cumque, quis.
                </p>
                <p className="body-large">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  neque eaque veritatis et distinctio, tempore ut enim
                  praesentium blanditiis perspiciatis facilis modi est
                  repudiandae quia at a sapiente. Cumque, quis.
                </p>
              </div>
            <div className="w-1/5 border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
            </div>
            {/* /End replace */}

          </div>
      </main>
    </>
  );
}
