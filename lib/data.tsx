export const DecidingToBuy = [
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

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const dummyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkUrl: "#",
  },
  {
    id: 2,
    title: "Sed ut perspiciatis unde omnis",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    imageUrl: "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    linkUrl: "#",
  },
  {
    id: 3,
    title: "Nemo enim ipsam voluptatem",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
    linkUrl: "#",
  },
];
