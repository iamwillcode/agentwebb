import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function index() {
  return (
    <>
      <Header />
      <main className="container p-4 py-32 mx-auto">
        <section className="">
          <Breadcrumb />
          <h1 className="display-small">Selling Your Property</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
