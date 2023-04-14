import Image from "next/image";
import Link from "next/link";

interface Blog_Card_Props {
  title: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
  linkUrl: string;
}

export default function Blog_Card({
  title,
  description,
  buttonLabel,
  imageUrl,
  linkUrl,
}: Blog_Card_Props) {
  return (
    <>
      <Link
        href={linkUrl}
        className="transition-all border border-gray-200 rounded bg-gray-200/30 hover:border hover:bg-gray-200/70 hover:cursor-pointer"
      >
        <div className="p-4 px-6 py-6">
          <div className="relative w-full h-48 bg-gray-300 ">
            <Image
              fill
              src={imageUrl}
              alt=""
              className="object-cover rounded"
            />
          </div>
          <h2 className="mt-4 font-bold title-medium">{title}</h2>
          <p className="mb-4 text-gray-500 body-medium">{description}</p>
          <button
            type="button"
            className="px-2 py-1 text-xs font-semibold text-gray-900 rounded ring-1 ring-inset ring-gray-200"
          >
            {buttonLabel}
          </button>
        </div>
      </Link>
    </>
  );
}