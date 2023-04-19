import Blog_Card from "@/components/Blog_Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { client } from "@/sanityClient";

export async function getStaticProps() {
  const posts = await client.fetch(` *[_type == "post"] { _id, title, description, body, slug, "mainImage": mainImage.asset->url } `);
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }: any) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Blog - AgentWebb</title>
      </Head>
      <Header />
      <main className="container p-4 py-32 mx-auto">
        <section className="max-w-5xl space-y-3">
          <h1 className="font-bold headline-large">
            Unlocking the Secrets of the Real Estate
          </h1>
          <p className="body-large">
            With years of experience and a deep understanding of the market,
            AgentWeeb offers expert advice and a personalized approach to every
            client. From pre-listing preparations to closing the deal, our team
            provides transparent communication, unparalleled expertise, and
            more.
          </p>
        </section>
        <section className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
          {posts.map((post: any) => {
            return (
              <Blog_Card
                key={post._id}
                title={post.title}
                description={post.description}
                buttonLabel="View More"
                linkUrl={`/blog/${post.slug.current}`}
                imageUrl={post.mainImage}
              />
            );
          })}
          <h1 className="title-medium"></h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
