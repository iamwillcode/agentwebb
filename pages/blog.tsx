import Blog_Card from "@/components/Blog_Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/blogAPI");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

export default function Blog({ ninjas }: any) {
  return (
    <>
      <Header />
      <main className="container p-4 py-32 mx-auto">
        <section className="max-w-5xl space-y-3">
          <h1 className="font-bold headline-large">Unlocking the Secrets of the Real Estate</h1>
          <p className="body-large">With years of experience and a deep understanding of the market, AgentWeeb offers expert advice and a personalized approach to every client. From pre-listing preparations to closing the deal, our team provides transparent communication, unparalleled expertise, and more.</p>
        </section>
        <section className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
          {ninjas
            .map((ninja: any) => (
              <>
                <Blog_Card title={ninja.title}
                  description={ninja.body}
                  buttonLabel="View More"
                  imageUrl={ninja.media}
                  linkUrl={`/blog/${ninja.title.toString().toLowerCase().split(' ').join('-')}`} />
              </>
            ))}
        </section>
      </main>
      <Footer />

    </>
  );
}
