import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blog_Card from "@/components/Blog_Card";
import Head from "next/head";
import { dummyBlogPosts } from "@/lib/data";
export default function blog() {
  return (
    <>
      <Head>
        <title>Blog - AgentWebb</title>
      </Head>
      <Header />
      <main className="my-32 wrapper">
        <section className="mb-8 space-y-2">
          <p className="font-bold text-amber-700 body-large">Blog Page</p>
          <h1 className="headline-large">
            Unlocking the Secrets of the Real Estate Transaction Process
          </h1>
          <p className="body-large">
            With years of experience and a deep understanding of the market,
            AgentWeeb offers expert advice and a personalized approach to every
            client. From pre-listing preparations to closing the deal, our team
            provides transparent communication, unparalleled expertise, and a
            commitment to your success.
          </p>
        </section>
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {dummyBlogPosts.map((post) => (
            <Blog_Card
              key={post.id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              linkUrl={post.linkUrl}
              buttonLabel="Read More"
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
