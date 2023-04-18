import TableOfContents from "./TableOfContents";
import { decidingToSell } from "@/lib/data";
import clsx from "clsx";
import Breadcrumb from "@/components/Breadcrumb";

export default function Selling_Layout({ className, ...props }: any) {
  return (
    <main
      className={clsx(
        "flex flex-col lg:flex-row justify-start lg:justify-center gap-8 p-4 py-32",
        className
      )}
    >
      <section className="">
        <TableOfContents programs={decidingToSell} />
      </section>
      <div className="flex flex-col">
        <Breadcrumb />
        <article className="prose max-w-7xl" {...props} />
      </div>
    </main>
  );
}
