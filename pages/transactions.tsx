import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import { decidingToBuy, decidingToSell } from "@/lib/data";
import Link from "next/link";

export default function ProgramSlug() {
  return (
    <>
      <Head>
        <title>Program</title>
      </Head>
      <Header />
      <main className="container p-4 py-32 mx-auto space-y-8">
        <section className="">
          <p className="text-yellow-800 body-medium">Step By Step Guide!</p>
          <h1 className="display-small">Real Estate Transaction Process</h1>
        </section>
        <section className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <Link href="/transactions/buying/" className="w-full transition-all bg-gray-200 h-96 hover:opacity-80 hover:cursor-pointer">&nbsp;</Link>
          <Link href="/transactions/selling/" className="w-full transition-all bg-gray-200 h-96 hover:opacity-80 hover:cursor-pointer">&nbsp;</Link>
        </section>
      </main>
      <CallToAction Headline="Ready to take the next step in your home buying journey?!" Supporting="Contact us today to speak with one of our experienced real estate professionals and get started on finding your dream home." />
      <Footer />
    </>
  );
}

