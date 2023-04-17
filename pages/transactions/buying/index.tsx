import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Header />
      <main className="container p-4 py-32 mx-auto">
        <section className="">
          <Breadcrumb />
          <h1 className="display-small">Buying Guide</h1>
          <article className="mt-4 space-y-4 prose max-w-7xl">
            <p>Are you ready to take the exciting leap into homeownership? Buying a home is a significant investment, and it can be a daunting task to navigate the various financial considerations involved. That&#39;s why we&#39;ve created the ultimate guide to help you make informed decisions throughout the home buying process.</p>
            <p>In this guide, we will walk you through everything you need to know about determining how much house you can afford.</p>
            <p>We&#39;ll show you how to use a mortgage calculator to determine the exact cost of your future home, including amortization charts, tables, and land transfer tax. We&#39;ll also provide you with tips and tricks to help you understand the various types of mortgages available and choose the one that&#39;s right for you.</p>
            <Button href="/transactions/buying/deciding-to-buy">Get Started</Button>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
