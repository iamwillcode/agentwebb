import Head from "next/head";
import { HiMail, HiPhone } from "react-icons/hi";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - AgentWebb</title>
        <meta name="title" content="Contact - AgentWebb" />
        <meta name="description" content="Get unbiased and honest information about the real estate buying and selling process. Learn from 25+ years of experience and be ready for any red flags." />
      </Head>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="px-6 py-16 bg-gray-50 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <HiPhone
                      className="flex-shrink-0 w-6 h-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <HiMail
                      className="flex-shrink-0 w-6 h-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">support@example.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-6 py-16 bg-white lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Example />
    </>
  );
}


function Example() {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-lg mx-auto md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <HiPhone className="w-6 h-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <HiMail className="w-6 h-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Technical Support</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat error corporis doloribus
                similique, voluptatibus numquam quam, quae officiis facilis.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <HiPhone className="w-6 h-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <HiMail className="w-6 h-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
