import Link from "next/link";

interface CallToActionProps {
  Headline: string,
  Supporting: string
}
export default function CallToAction({Headline, Supporting}: CallToActionProps) {
  return (
    <div className="bg-yellow-500/30">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <h2 className="headline-medium">
            {Headline}
          </h2>
          <p className="max-w-xl mx-auto body-large">
            {Supporting}
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-yellow-600 shadow-sm hover:bg-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            >
              Call Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}