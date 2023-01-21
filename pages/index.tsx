import Head from "next/head";
import Hero from "../components/home/hero";
import Stats from "../components/home/Stats";
import Benifits from "../components/home/Benifits";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>AgentWebb</title>
        <meta name="title" content="AgentWebb" />
        <meta name="description" content="Get unbiased and honest information about the real estate buying and selling process. Learn from 25+ years of experience and be ready for any red flags." />
      </Head>
      <main className="">
        <Hero />
        <Stats />
        <Features />
        <Benifits/>
        <Testimonials/>
        <CallToAction/>
      </main>
    </>
  );
}

