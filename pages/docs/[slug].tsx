import Head from "next/head";
import Link from "next/link";
import { deciding_to_buy, articles } from "../../lib/data";

export default function docs() {
  return (
    <>
      <Head>
        <title>Docs Slug - AgentWebb</title>
        <meta name="title" content="Docs - AgentWebb" />
        <meta
          name="description"
          content="Get unbiased and honest information about the real estate buying and selling process. Learn from 25+ years of experience and be ready for any red flags."
        />
      </Head>
      <main className="flex-1 my-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="flex items-start w-full gap-4 mt-4">
            <Nav_Links />
            <Article_Content />
            <Side_Pannel />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

function Nav_Links() {
  return (
    <>
      <div className="hidden w-1/5 p-4 border-gray-200 border-dashed rounded-lg lg:block bg-gray-50">
        <h6 className="title-medium">Realestate Process</h6>
        <ul className="mt-4 space-y-4 body-medium">
          {articles.map((content) => {
            return (
              <>
                <li
                  key={content.title.toString()}
                  className="title-medium"
                >
                  <Link href={content.path_name}>{content.title}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
function Article_Content() {
  return (
    <>
      <div className="w-full prose">
        <h2 className="">
          A Guide to Purchasing Your First Home: Tips to Make the Process Easier
        </h2>
        <p>
          Are you ready to become a homeowner? Purchasing a home is an exciting
          milestone and can be a great investment for your future. However, the
          process can also be intimidating and filled with unknowns. To help
          make the process easier, here are some tips to consider when
          purchasing your first home.
        </p>
        <p>
          1. Get pre-approved for a mortgage: Before you start shopping for a
          home, it&#39;s important to get pre-approved for a mortgage. This will
          help you determine how much you can afford and provide you with a
          better idea of what type of home you should be looking for.
        </p>
        <p>
          2. Research the area: Before you commit to a house, it&#39;s important
          to research the area. Look into the local schools, crime rate and
          other factors that may impact your decision.
        </p>
        <p>
          3. Hire an inspector: Once you&#39;ve found a home that you like, hire
          a qualified home inspector to inspect the property and uncover any
          potential issues.
        </p>
        <p>
          4. Negotiate: Once you&#39;ve found a home you love, it&#39;s time to
          negotiate. Don&#39;t be afraid to ask for a better price or include
          certain items in the sale.
        </p>
        <p>5. Get the necessary paperwork</p>
      </div>
    </>
  );
}
function Side_Pannel() {
  return (
    <>
      <div className="hidden w-1/5 p-4 border-gray-200 border-dashed rounded-lg lg:block bg-gray-50">
        <h6 className="title-medium">Deciding To Buy</h6>
        <ul className="pl-4 mt-2 space-y-1 list-disc body-medium">
          {deciding_to_buy.map((content) => {
            return (
              <>
                <li
                  key={content.title.toString()}
                  className="text-gray-500 transition-all rounded-xl body-large hover:text-gray-900 hover:underline"
                >
                  <Link href={content.path_name}>{content.title}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
