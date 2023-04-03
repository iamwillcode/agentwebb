import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function about() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
        <meta name="title" content="AgentWebb" />
        <meta name="description" content="Offer unbiased insights into the real estate transactions, to help you, understand, identify potential red flags to help you make informed decisions." />
      </Head>
      {/* End Of Page SEO */}
      <Header />
      <main className="py-32 ">
        <section className="wrapper">
          <h1 className="headline-large">about</h1>
        </section>
      </main>
      <Footer />
    </>
  )
}
