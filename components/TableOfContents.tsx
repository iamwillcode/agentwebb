const DecidingToBoy = [
  { id: 1, content: "Selecting An Agent" },
  { id: 1, content: "Sell First Or Buy First." },
  { id: 1, content: "How Much Can You Afford Calculators!" },
  { id: 1, content: "Selecting an Agent!" },
  { id: 1, content: "Signing The Realtors Contract!" },
  { id: 1, content: "Getting Ready For Visiting!" },
  { id: 1, content: "Searching Properties" },
  { id: 1, content: "Visiting Propertiess!" },
  { id: 1, content: "Making An Offer.!" },
  { id: 1, content: "Negotiating The Offer.!" },
  { id: 1, content: "Making The Agreement to Purchase Firm.!" },
  // More items...
]

import React from 'react'

export default function TableOfContents() {
  return (
    <div className="p-4 space-y-4">
      <p className="border-b title-medium">Deciding To Buy</p>
      <ul role="list" className="flex flex-col items-start mt-2 space-y-2">
        {DecidingToBoy.map((item: any) => (
          <div key={item.id} className="w-{100%} body-medium  hover:bg-gray-100">{item.content}</div>
        ))}
      </ul>
      {/* End: Deciding To Biy */}
      <p className="border-y title-medium">Deciding To Sell</p>
      <ul role="list" className="flex flex-col items-start mt-2 space-y-2">
        {DecidingToBoy.map((item: any) => (
          <div key={item.id} className="w-{100%} body-medium  hover:bg-gray-100">{item.content}</div>
        ))}
      </ul>
      {/* End: Deciding To Biy */}
      <p className="border-y title-medium">Deciding To Rent</p>
      <ul role="list" className="flex flex-col items-start mt-2 space-y-2">
        {DecidingToBoy.map((item: any) => (
          <div key={item.id} className="w-{100%} body-medium  hover:bg-gray-100">{item.content}</div>
        ))}
      </ul>
      {/* End: Deciding To Biy */}
    </div>
  )
}
