import Head from "next/head";
import Link from "next/link";
import { articles } from "../lib/data";
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
      <main className="my-16 wrapper">
        <section className="flex items-start gap-8">
          <div className="">
            <Nav_Links />
          </div>
          <div className="prose">
            <h1 className="font-bold display-medium">Getting Started</h1>
            <p className="mt-4 body-large">
              Welcome to the AgentWebb documentation!
            </p>
            <p>
              If you&#39;re new to AgentWebb, we recommend starting with the learn
              course. The interactive course with quizzes will guide you through
              everything you need to know to use AgentWebb.
            </p>
            <p>
              If you have questions about anything related to AgentWebb,
              you&#39;re always welcome to ask our community on GitHub
              Discussions
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

function Nav_Links() {
  return (
    <>
      <div className="hidden p-4 border-gray-200 border-dashed rounded-lg lg:block bg-gray-50">
        <h6 className="title-medium">Realestate Process</h6>
        <ul className="mt-4 space-y-4 body-medium">
          {articles.map((content) => {
            return (
              <>
                <li key={content.title.toString()} className="title-medium">
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
