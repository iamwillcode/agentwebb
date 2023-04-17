import TableOfContents from "./TableOfContents";
import {decidingToSell} from "@/lib/data";
import clsx from 'clsx'

export default function Selling_Layout({ className, ...props }: any) {
  return (
    <main className={clsx('flex flex-col lg:flex-row justify-start lg:justify-center gap-8 p-4 py-32', className)}>
      <section className="">
        <TableOfContents programs={decidingToSell} />
      </section>
      <article className="prose max-w-7xl" {...props}  />
    </main>
  )
}
