// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Blog = {
  id: number;
  title: string;
  body: string;
  media: string;
};

const Blogs: Blog[] = [
  {
    id: 1,
    title: "5 Common Mistakes First-Time Homebuyers Make",
    body: "In this blog post, we'll explore the common mistakes that first-time homebuyers tend to make during the real estate transaction process. From not getting pre-approved to skipping the home inspection, we'll discuss how to avoid these mistakes and ensure a smooth homebuying experience",
    media: "/media/deciding-to-buy.webp",
  },
  {
    id: 2,
    title: "How to Sell Your Home Quickly",
    body: "If you're looking to sell your home quickly, you're not alone. In this blog post, we've gathered tips from top real estate agents on how to increase your home's appeal and sell it in a shorter amount of time. From staging to pricing, we'll cover all the bases",
    media: "/media/hero.webp",
  },
  {
    id: 3,
    title: "Why Location Matters: The Importance of Neighborhood in Real Estate",
    body: "The old saying goes, Location, location, location! But what does that really mean? In this blog post, we'll explore the importance of neighborhood when it comes to real estate. From school districts to access to amenities, we'll discuss what to look for in a neighborhood",
    media: "/media/pexels-rodnae-productions-8293778-expereince.jpg",
  },
  {
    id: 4,
    title: "The Role of Technology in Real Estate",
    body: "Technology is changing the real estate industry, from virtual tours to smart home features. In this blog post, we'll explore the latest technological advancements in real estate and how they can benefit both buyers and sellers",
    media:
      "https://images.unsplash.com/photo-1616587896595-51352538155b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    title: "Maximizing Your Home's Resale Value",
    body: "Whether you're planning to sell your home in the near future or just want to increase its resale value, this blog post is for you. We've gathered tips from real estate experts on how to get the most out of your home's resale value, from small renovations to major updates",
    media:
      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "What to Expect During the Home Inspection Process",
    body: "The home inspection process can be daunting for both buyers and sellers. In this blog post, we'll walk you through what to expect during the home inspection process, from what the inspector looks for to common issues found in homes",
    media:
      "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    title: "Buying vs. Renting: Which is Right for You?",
    body: "One of the biggest decisions you&#39;ll make when it comes to housing is whether to buy or rent. In this blog post, we&#39;ll weigh the pros and cons of buying versus renting and help you determine which option is best for your lifestyle and financial situation",
    media:
      "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    title: "The Importance of Hiring the Right Real Estate Agent ",
    body: "Your real estate agent can make all the difference in your homebuying or selling experience. In this blog post, we'll explore the importance of hiring the right real estate agent and how to find the perfect fit for your needs",
    media:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    title: "Navigating the Closing Process: What You Need to Know",
    body: "The closing process is the final step in a real estate transaction, but it can be confusing for those who are new to the process. In this blog post, we'll explain what to expect during the closing process and how to ensure a smooth and successful closing",
    media:
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[]>
) {
  res.status(200).json(Blogs);
}
