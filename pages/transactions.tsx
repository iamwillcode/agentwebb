import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AiOutlineMenu } from "react-icons/ai"
import { DecidingToBuy } from "@/lib/data"
import { useState } from 'react'


export default function transactions() {
  return (
    <>
      <Head>
        <title>Realestate Transaction - Agentwebb</title>
      </Head>
      <Header />
      <main className="py-32 wrapper">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="col-span-3 md:col-span-1">
            <TableOfContents />
          </div>
          <div className="col-span-3">
            <ContentCentered />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function TableOfContents() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <>
      {/* A section element with full width and column space of 1 for responsive design. */}
      <section className="w-full col-span-1 border border-blue-700 rounded">
        <div className="wrapper">
          <div className="flex items-center md:text-start lg:flex-col">
            {/* Icon for mobile design of table of contents. */}
            <AiOutlineMenu className="w-4 h-4 fill-blue-700 lg:hidden" onClick={toggleList} />
            <h1 className="text-blue-700 title-medium">Table Of Contents</h1>
            <hr className="border-b border-blue-500" />
          </div>
          <ul role="list" className={`${showList ? 'block' : 'hidden'} lg:block flex flex-col items-start mt-2 space-y-2`}>
            {/* Map of links to different routes for various stages of the real estate transaction. */}
            {DecidingToBuy.map((item: any) => (
              <li key={item.id} className="w-full prose text-blue-900 hover:bg-gray-100">
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}


// A Link  
function ContentCentered() {
  return (
    <div className="my-8 lg:my-0">
      <div className="text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">JavaScript for Beginners</h1>
        <p className="mt-6 text-xl leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
          aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
          egestas fringilla sapien.
        </p>
        <div className="max-w-2xl mt-10">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">From beginner to expert in 3 hours</h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                tristique.”
              </p>
            </blockquote>
            <figcaption className="flex mt-6 gap-x-4">
              <img
                className="flex-none w-6 h-6 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
        <figure className="mt-16">
          <img
            className="object-cover aspect-video rounded-xl bg-gray-50"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="flex mt-4 text-sm leading-6 text-gray-500 gap-x-2">
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="max-w-2xl mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and running</h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
      </div>
    </div>
  )
}