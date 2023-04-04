import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TableOfContents from "@/components/TableOfContents";

export default function Transactions() {
  return (
    <>
      <Header />
      <main className="my-32 wrapper">
        <div className="flex gap-16">
          <section className="w-[720px] border space-y-4">
            <TableOfContents />
          </section>
          <article>
            <ArticleContent />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
function ArticleContent() {
  return (
    <article className="space-y-4">
      <p className="text-blue-700 label-medium">Deciding To Buy</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl">
        Things to consider when to buy a home.
      </h1>
      <p className="mt-6 text-xl body-large">
        Buying a home is a big decision, and it&#39;s essential to consider various factors before taking the leap. In this article we give you, twelve critical factors gbefore buying.
      </p>
      <hr />
      <div className="py-8 body-large">
        <ol>
          <li>Ranodm Infromation </li>
        </ol>
      </div>
    </article>
  );
}
