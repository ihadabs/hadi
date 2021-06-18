// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string
}

export default function Hello(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: 'Hadi Albinsaad' });
}
