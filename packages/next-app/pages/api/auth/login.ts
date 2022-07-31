import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';

export default async function authHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const { publicAddress } = req.body;

    if (!publicAddress) {
      return res.status(400).json({ error: 'Missing publicAddress' });
    }

    const user = await prisma.user.findUnique({ where: { publicAddress } });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    return res.status(200).json({ message: 'Logged in!' });
  }

  return res.status(400).json({ error: 'Only POST requests allowed' });
}
