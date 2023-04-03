import Image from 'next/image'
import React from 'react'
import { HiLink } from 'react-icons/hi'

export default function BlogCard() {
  return (
    <div className="overflow-hidden transition-all bg-transparent border rounded-lg hover:cursor-pointer hover:bg-slate-100">
      <div className="px-4 py-5 sm:p-6">
        <div className="relative w-full h-48 mb-4">
          <Image fill quality={40} src="/dummy-image.png" alt="Dummy Image" />
        </div>
        <p className="title-medium" aria-label='Blog-Card--Headline'>Card Title Goes Here</p>
        <p className="leading-5 text-gray-700 body-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, minima quos? Inventore, magni. Odit et quisquam eligendi tenetur!</p>
        <button
        type="button"
        className="inline-flex mt-2 items-center gap-1.5 py-1 pr-2 text-xs font-semibold text-gray-500 bg-transparent hover:bg-indigo-100"
      >
        <HiLink />
        Button text
      </button>
      </div>
    </div>
  )
}
