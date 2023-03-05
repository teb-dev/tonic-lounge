// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { loungesData } from '@src/lib/data';
import { LoungeResponse } from '@src/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<LoungeResponse>) {
  res.status(200).json({
    data: loungesData.slice(5 * Number(req.query.page) - 5, 5 * Number(req.query.page)),
    total: loungesData.length,
  });
}
