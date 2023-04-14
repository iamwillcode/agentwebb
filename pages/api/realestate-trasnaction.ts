// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Program = {
  id: number,
  title: string,
  body: string,
  description: string
}

const programs: Program[] = [
  {
    id: 1,
    title: 'Program 1',
    body: 'This is the body of Program 1',
    description: 'This is a description of Program 1'
  },
  {
    id: 2,
    title: 'Program 2',
    body: 'This is the body of Program 2',
    description: 'This is a description of Program 2'
  },
  {
    id: 3,
    title: 'Program 3',
    body: 'This is the body of Program 3',
    description: 'This is a description of Program 3'
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Program[]>
) {
  res.status(200).json(programs)
}
