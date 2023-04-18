import Link from "next/link";
import { useState } from "react";

type Program = {
  id: number;
  title: string;
};

type TableOfContentsProps = {
  programs: Program[];
};

export default function TableOfContents({ programs }: TableOfContentsProps) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <section className="w-full p-4 border rounded bg-gray-100/50 ">
      <div className="flex flex-col gap-2 lg:flex-col lg:items-start lg:ml-4">
        <button className="text-gray-700 title-medium " onClick={toggleList}>
          Table Of Contents
          <span className="ml-2 lg:hidden">{showList ? "▲" : "▼"}</span>
        </button>
        <div className="flex flex-col items-start space-y-2 lg:items-stretch lg:flex-row lg:space-y-0 lg:w-auto">
          <ul
            role="list"
            aria-label="Table of Contents"
            className={`${
              showList ? "block" : "hidden"
            } lg:block flex flex-col items-start space-y-2`}
          >
            {programs.map((program) => (
              <li key={program.id} className="p-2.5 rounded">
                <Link href={program.title.toString().toLowerCase().replace(/\s+/g,"-")} className="px-2 prose capitalize transition-all border-l-2 hover:text-yellow-700 hover:border-l active:border-yellow-700">{program.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}